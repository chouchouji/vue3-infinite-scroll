<template>
  <div ref="rootNode" :style="wrapStyle">
    <div :style="innerStyle">
      <div v-for="(item, idx) in visibleData" :key="idx + start" :style="getItemStyle(idx)">
        <slot :item="item" :index="idx + start"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
  type CSSProperties
} from 'vue'
import { props } from './props'
import { SCROLL_INNER_STYLE, SCROLL_ITEM_STYLE, SCROLL_WRAP_STYLE } from '@/constants/style'
import { POSITION, SIZE } from '@/constants'
import { toSizeUnit } from '@/utils'
import { SizeAndPosManager } from '@/utils/sizeAndPositionManager'
import type { ScrollToAlignment } from '@/types'

export default defineComponent({
  name: 'InfiniteList',
  props,
  setup(props) {
    let cachedStyles: Record<number, CSSProperties> = {}
    let sizeAndPosManager: SizeAndPosManager
    let offset = 0
    let lastOffset = 0

    const start = ref<number>(0)
    const stop = ref<number>(8)
    const rootNode = ref<HTMLElement | null>(null)
    const innerStyle = ref<CSSProperties>()
    const wrapStyle = ref<CSSProperties>()

    const dataCount = computed(() => {
      return props.data ? props.data.length : 0
    })

    const estimatedItemSize = computed(() => {
      return props.estimatedSize || 50
    })

    const visibleData = computed(() => {
      return props.data
        ? props.data.slice(start.value, Math.min(props.data.length, stop.value + 1))
        : []
    })

    const scrollProperty = computed(() => {
      return props.direction === 'horizontal' ? 'scrollLeft' : 'scrollTop'
    })

    const getWrapStyle = () => {
      return {
        ...SCROLL_WRAP_STYLE,
        width: toSizeUnit(props.width),
        height: toSizeUnit(props.height)
      }
    }

    const getInnerStyle = () => {
      const style: CSSProperties = {
        ...SCROLL_INNER_STYLE
      }

      const size = toSizeUnit(sizeAndPosManager.getTotalSize())

      if (props.direction === 'horizontal') {
        style.width = size
        return style
      }

      style.height = size
      return style
    }

    const getItemStyle = (idx: number) => {
      const index = idx + start.value
      const style = cachedStyles[index]
      if (style) {
        return style
      }

      if (!sizeAndPosManager) {
        return SCROLL_ITEM_STYLE
      }

      const { size, offset } = sizeAndPosManager.getSizeAndPositionForIndex(index)

      return (cachedStyles[index] = {
        ...SCROLL_ITEM_STYLE,
        [SIZE[props.direction]]: toSizeUnit(size),
        [POSITION[props.direction]]: toSizeUnit(offset)
      })
    }

    const init = () => {
      createSizeAndPosManager()

      rootNode.value!.addEventListener('scroll', handleScroll)

      offset =
        props.scrollToOffset ||
        (props.scrollToIndex != null &&
          getOffsetFromIdxAndAlign(props.scrollToIndex, props.scrollToAlignment)) ||
        0

      setTimeout(() => {
        if (props.scrollToOffset != null) {
          scrollTo(props.scrollToOffset)
        } else if (props.scrollToIndex != null) {
          scrollTo(getOffsetFromIdxAndAlign(props.scrollToIndex, props.scrollToAlignment))
        }
      }, 0)

      wrapStyle.value = getWrapStyle()
      innerStyle.value = getInnerStyle()
    }

    const createSizeAndPosManager = () => {
      if (!sizeAndPosManager) {
        sizeAndPosManager = new SizeAndPosManager({
          itemCount: dataCount.value,
          estimatedItemSize: estimatedItemSize.value,
          itemSizeGetter: (idx) => getSizeFromIdx(idx)
        })
      }

      return sizeAndPosManager
    }

    const handleScroll = (e: Event) => {
      const rootNodeOffset =
        props.direction === 'vertical' ? rootNode.value!.scrollTop : rootNode.value!.scrollLeft

      if (rootNodeOffset < 0 || offset === rootNodeOffset || e.target !== rootNode.value) {
        return
      }

      offset = rootNodeOffset

      processScroll()
    }

    const processScroll = () => {
      const { width, height, direction, overscanCount } = props
      const data = sizeAndPosManager.getVisibleRange({
        containerSize: (direction === 'horizontal' ? width : height) as number,
        offset: offset || 0,
        overscanCount: overscanCount
      })

      if (data.start != null && data.stop != null) {
        start.value = data.start
        stop.value = data.stop
      }

      innerStyle.value = getInnerStyle()

      if (offset !== lastOffset) {
        scrollTo(offset)
      }
    }

    const scrollTo = (offset: number) => {
      if (rootNode.value) {
        rootNode.value[scrollProperty.value] = offset
        lastOffset = offset
      }
    }

    const getSizeFromIdx = (idx: number): number => {
      const itemSize = props.itemSize

      if (typeof itemSize === 'function') {
        return itemSize(idx)
      }

      if (Array.isArray(itemSize)) {
        return itemSize[idx]
      }

      return itemSize || estimatedItemSize.value
    }

    const getOffsetFromIdxAndAlign = (idx: number, align: ScrollToAlignment) => {
      if (idx < 0 || idx >= dataCount.value) {
        idx = 0
      }

      const { width, height, direction } = props

      return sizeAndPosManager.getUpdatedOffsetForIndex({
        align,
        containerSize: (direction === 'horizontal' ? width : height) as number,
        currentOffset: offset || 0,
        targetIndex: idx
      })
    }

    const clearCachedStyles = () => {
      for (let key in cachedStyles) {
        delete cachedStyles[key]
      }
    }

    onMounted(() => {
      setTimeout(init, 0)
    })

    onBeforeUnmount(() => {
      clearCachedStyles()
      sizeAndPosManager.destroy()
      rootNode.value!.removeEventListener('scroll', handleScroll)
    })

    watch(
      () => props.data,
      (newData) => {
        sizeAndPosManager.updateConfig({
          itemCount: newData?.length || 0,
          estimatedItemSize: estimatedItemSize.value
        })

        offset = 0
        lastOffset = 0
        cachedStyles = {}
        sizeAndPosManager.resetItem(0)
      }
    )

    watch(
      () => props.scrollToOffset,
      (newOffset) => {
        offset = newOffset
        processScroll()
      }
    )

    watch(
      () => props.scrollToIndex,
      (newIdx) => {
        offset = getOffsetFromIdxAndAlign(newIdx, props.scrollToAlignment)
        processScroll()
      }
    )

    watch(
      () => props.scrollToAlignment,
      (newAlign) => {
        offset = getOffsetFromIdxAndAlign(props.scrollToIndex, newAlign)
        processScroll()
      }
    )

    return {
      start,
      visibleData,
      wrapStyle,
      innerStyle,
      rootNode,
      getItemStyle
    }
  }
})
</script>

<style scoped></style>
