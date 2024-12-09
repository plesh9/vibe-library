import styles from './Button.module.scss'

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, ...restProps } = props

    return (
        <button className={`${className} ${styles.button}`} {...restProps}>
            {children}
        </button>
    )
}
