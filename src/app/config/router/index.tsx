import { NoData } from '@lib/main'
import { createBrowserRouter } from 'react-router-dom'
import ROUTES from '@shared/const/routes'
import NotFound from '@widgets/NotFound'
import AccordionPage from '@pages/accordion'
import BoxPage from '@pages/box'
import ButtonPage from '@pages/button'
import LoaderPage from '@pages/loader'
import TypographyPage from '@pages/typography'
import MainLayout from '@app/layouts/MainLayout'

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: ROUTES.BUTTON,
                element: <ButtonPage />
            },
            {
                path: ROUTES.TYPOGRAPHY,
                element: <TypographyPage />
            },
            {
                path: ROUTES.BOX,
                element: <BoxPage />
            },
            {
                path: ROUTES.ACCORDION,
                element: <AccordionPage />
            },
            {
                path: ROUTES.LOADER,
                element: <LoaderPage />
            },
            {
                path: ROUTES.NO_DATA,
                element: <NoData />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router
