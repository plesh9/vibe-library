import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@widgets/Sidebar'
import s from './MainLayout.module.scss'

const MainLayout: FC = () => {
    return (
        <div className={s.main}>
            <Sidebar />
            <div className={s.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
