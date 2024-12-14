const BREAKPOINTS = {
    xxl: 1550,
    xl: 1200,
    lg: 991,
    md: 767,
    sm: 575
} as const

export type BreakpointType = keyof typeof BREAKPOINTS
export default BREAKPOINTS
