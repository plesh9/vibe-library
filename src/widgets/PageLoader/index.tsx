import Spinner from '@lib/ui/Spinner'
import type { FC } from 'react'
import s from './PageLoader.module.scss'

const PageLoader: FC = () => {
    return (
        <div className={s.main}>
            <Spinner size='24' color='blue500' />
        </div>
    )
}

export default PageLoader
