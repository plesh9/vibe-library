const ROUTES = {
    BUTTON: '/',
    TYPOGRAPHY: '/typography',
    BOX: '/box',
    ACCORDION: '/accordion',
    LOADER: '/loader',
    NO_DATA: '/no-data'
} as const

export type RouteType = keyof typeof ROUTES

export default ROUTES
