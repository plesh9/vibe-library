import styles from './styles.module.scss'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...restProps } = props
  return <button className={`${className} ${styles.button}`} {...restProps}>
     s{children}
  </button>
}