import { createBrowserRouter } from 'react-router-dom'
import ROUTES from '@shared/const/routes'
import NotFound from '@widgets/NotFound'
import ButtonPage from '@pages/button'
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
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router
