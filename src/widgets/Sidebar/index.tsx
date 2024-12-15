import { classnames } from '@lib/main'
import type { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SIDEBAR_CONFIG from './config'
import s from './Sidebar.module.scss'

const Sidebar: FC = () => {
    const { pathname } = useLocation()

    return (
        <div className={s.main}>
            <div className={s.wrapper}>
                <div className={s.navigation}>
                    {SIDEBAR_CONFIG.map((item) => (
                        <Link className={classnames(s.link, pathname === item.href && s.active)} key={item.href} to={item.href}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
