import { classnames, type ColorsType, type IconsType } from '@lib/main'
import type { FC } from 'react'
import Icon from '../Icon'
import s from './Spinner.module.scss'

export interface SpinnerPropsType {
    icon?: IconsType
    size?: '12' | '16' | '20' | '24' | '48'
    color?: ColorsType
}

const Spinner: FC<SpinnerPropsType> = ({ icon = 'loading', size = '16', color }) => {
    return (
        <div className={classnames(s.main, s[`size${size}`])}>
            <Icon name={icon} color={color} />
        </div>
    )
}

export default Spinner
