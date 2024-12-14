import type { FC } from 'react'
import type { SpinnerPropsType } from '../Spinner'
import Spinner from '../Spinner'
import s from './Loader.module.scss'

export interface LoaderPropsType extends SpinnerPropsType {}

const Loader: FC<LoaderPropsType> = ({ size = '24', color = 'blue500', ...rest }) => {
    return (
        <div className={s.main}>
            <Spinner size={size} color={color} {...rest} />
        </div>
    )
}

export default Loader
