import { type ScrollDirection } from '../types/index'

export const ALIGN_AUTO: string = 'auto'
export const ALIGN_START: string = 'start'
export const ALIGN_CENTER: string = 'center'
export const ALIGN_END: string = 'end'

export const VERTICAL_DIRECTION: ScrollDirection = 'vertical'
export const HORIZONTAL_DIRECTION: ScrollDirection = 'horizontal'

export const POSITION = {
  [VERTICAL_DIRECTION]: 'top',
  [HORIZONTAL_DIRECTION]: 'left'
}

export const SIZE = {
  [VERTICAL_DIRECTION]: 'height',
  [HORIZONTAL_DIRECTION]: 'width'
}
