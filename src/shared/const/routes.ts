const ROUTES = {
    BUTTON: '/',
    TYPOGRAPHY: '/typography'
} as const

export type RouteType = keyof typeof ROUTES

export default ROUTES
