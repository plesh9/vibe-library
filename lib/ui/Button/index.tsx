import type { ComponentPropsWithoutRef, ComponentType, MouseEventHandler, ReactNode } from 'react'
import { type IconsType } from '../../const/icons'
import classnames from '../../utils/classnames'
import Icon from '../Icon'
import Spinner from '../Spinner'
import s from './Button.module.scss'

type ButtonElementType = keyof JSX.IntrinsicElements
type ButtonSizesType = 'large' | 'small'
type ButtonVariantsType = 'primary' | 'secondary' | 'link' | 'transparent'
type AdditionalButtonPropsType<T extends ButtonElementType | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
type Props<T extends ButtonElementType | ComponentType<any>> = {
    as?: T
    size?: ButtonSizesType
    variant?: ButtonVariantsType
    icon?: IconsType
    children?: ReactNode
    wide?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    loading?: boolean
    disabled?: boolean
    reverse?: boolean
    type?: 'button' | 'submit' | 'reset'
} & AdditionalButtonPropsType<T>

export type ButtonPropsType = Parameters<typeof Button>[0]

export const buttonSizes: Record<ButtonSizesType, string> = {
    large: s.large,
    small: s.small
}

export const buttonVariants: Record<ButtonVariantsType, string> = {
    primary: s.primary,
    secondary: s.secondary,
    link: s.link,
    transparent: s.transparent
}

const Button = <T extends ButtonElementType | ComponentType<any> = 'button'>({ as, size = 'large', variant = 'primary', children, wide, disabled, loading, onClick, icon, reverse, className, type = 'button', ...restProps }: Props<T>) => {
    const Component = as || 'button'

    return (
        <Component onClick={onClick} disabled={loading || disabled} className={classnames(s.main, buttonSizes[size], buttonVariants[variant], wide && s.wide, reverse && 'reverse', className)} type={type} {...restProps}>
            {icon && !loading && <Icon className={s.icon} name={icon} />}
            {loading && <Spinner />}
            {children}
        </Component>
    )
}

export default Button
