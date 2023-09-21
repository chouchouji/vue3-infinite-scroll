import { type PropType } from 'vue'
import { type ScrollDirection, type ScrollToAlignment } from '../types/index'
import { ALIGN_AUTO, VERTICAL_DIRECTION } from '@/constants'

export const props = {
  width: {
    type: [Number, String],
    required: true
  },
  height: {
    type: [Number, String],
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true,
    default: []
  },
  direction: {
    type: String as PropType<ScrollDirection>,
    default: VERTICAL_DIRECTION
  },
  itemSize: [Number, Array<Number>, Function] as PropType<
    number | Array<number> | ((idx: number) => number)
  >,
  scrollToIndex: {
    type: Number,
    default: 0
  },
  scrollOffset: {
    type: Number,
    default: 0
  },
  scrollToAlignment: {
    type: String as PropType<ScrollToAlignment>,
    default: ALIGN_AUTO,
  },
  overscanCount: {
    type: Number,
    default: 4
  },
  estimatedSize: Number
}
