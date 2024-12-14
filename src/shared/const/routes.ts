const ROUTES = {
    BUTTON: '/',
    TYPOGRAPHY: '/typography',
    BOX: '/box'
} as const

export type RouteType = keyof typeof ROUTES

export default ROUTES
