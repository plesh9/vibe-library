import Button from '@lib/ui/Button'
import NoData from '@lib/ui/NoData'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '@shared/const/routes'

const NotFound: FC = () => {
    return (
        <NoData title='404' subtitle='Page not found'>
            <Button icon='arrow-back' as={Link} to={ROUTES.BUTTON} size='small' variant='primary'>
                Go to home
            </Button>
        </NoData>
    )
}

export default NotFound
