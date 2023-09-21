export const isString = (val: unknown): val is string => typeof val === 'string'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isBoolean = (val: unknown): val is number => typeof val === 'boolean'

export const isWindow = (val: unknown): val is Window => val === window

export const inBrowser = () => typeof window !== 'undefined'

export const toNumber = (val: number | string | undefined | null): number => {
  if (val == null) return 0

  if (isString(val)) {
    val = parseFloat(val)
    val = Number.isNaN(val) ? 0 : val
    return val
  }

  if (isBoolean(val)) {
    return Number(val)
  }

  return val
}

export const getStyle = (element: Element) => window.getComputedStyle(element)

export const getRect = (element: Element | Window): DOMRect => {
  if (isWindow(element)) {
    const width = element.innerWidth
    const height = element.innerHeight
    const rect = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height
    }

    return {
      ...rect,
      toJSON: () => rect
    }
  }

  return element.getBoundingClientRect()
}

export function getViewportSize() {
  const { width, height } = getRect(window)

  return {
    vw: width,
    vh: height,
    vMin: Math.min(width, height),
    vMax: Math.max(width, height)
  }
}

export const isRem = (value: unknown): value is string => isString(value) && value.endsWith('rem')

export const isEm = (value: unknown): value is string =>
  isString(value) && value.endsWith('em') && !value.endsWith('rem')

export const isPx = (value: unknown): value is string | number =>
  (isString(value) && value.endsWith('px')) || isNumber(value)

export const isPercent = (value: unknown): value is string => isString(value) && value.endsWith('%')

export const isVw = (value: unknown): value is string => isString(value) && value.endsWith('vw')

export const isVh = (value: unknown): value is string => isString(value) && value.endsWith('vh')

export const isVMin = (value: unknown): value is string => isString(value) && value.endsWith('vmin')

export const isVMax = (value: unknown): value is string => isString(value) && value.endsWith('vmax')

export const isCalc = (value: unknown): value is string =>
  isString(value) && value.startsWith('calc(')

export const isVar = (value: unknown): value is string =>
  isString(value) && value.startsWith('var(')

export const toPxNum = (value: unknown): number => {
  if (isNumber(value)) {
    return value
  }

  if (isPx(value)) {
    return +(value as string).replace('px', '')
  }

  if (!inBrowser()) {
    return 0
  }

  const { vw, vh, vMin, vMax } = getViewportSize()

  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * vw) / 100
  }

  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * vh) / 100
  }

  if (isVMin(value)) {
    return (+(value as string).replace('vmin', '') * vMin) / 100
  }

  if (isVMax(value)) {
    return (+(value as string).replace('vmax', '') * vMax) / 100
  }

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '')
    const rootFontSize = getStyle(document.documentElement).fontSize

    return num * parseFloat(rootFontSize)
  }

  if (isString(value)) {
    return toNumber(value)
  }

  return 0
}

export const toSizeUnit = (value: unknown) => {
  if (value == null) {
    return undefined
  }

  if (
    isPercent(value) ||
    isVw(value) ||
    isVh(value) ||
    isEm(value) ||
    isRem(value) ||
    isCalc(value) ||
    isVar(value) ||
    isVMin(value) ||
    isVMax(value)
  ) {
    return value
  }

  return `${toPxNum(value)}px`
}
