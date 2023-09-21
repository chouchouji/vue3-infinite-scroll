import { type CSSProperties } from 'vue'

export const SCROLL_ITEM_STYLE: CSSProperties = {
  position: 'absolute',
  left: 0,
  width: '100%',
  height: '100%'
}

export const SCROLL_INNER_STYLE: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: '100%'
}

export const SCROLL_WRAP_STYLE: CSSProperties = {
  overflow: 'auto',
  willChange: 'transform',
  WebkitOverflowScrolling: 'touch'
}
