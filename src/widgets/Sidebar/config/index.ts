import type { ReactNode } from 'react'
import ROUTES from '@shared/const/routes'

interface SidebarConfigType {
    title: ReactNode
    href: string
}

const SIDEBAR_CONFIG: Array<SidebarConfigType> = [
    {
        title: 'Button',
        href: ROUTES.BUTTON
    },
    {
        title: 'Typography',
        href: ROUTES.TYPOGRAPHY
    },
    {
        title: 'Box',
        href: ROUTES.BOX
    },
    {
        title: 'Accordion',
        href: ROUTES.ACCORDION
    },
    {
        title: 'Loader',
        href: ROUTES.LOADER
    },
    {
        title: 'No Data',
        href: ROUTES.NO_DATA
    }
] as const

export default SIDEBAR_CONFIG
