const classnames = (...classes: Array<string | number | boolean | undefined | null>) => classes.filter(Boolean).join(' ') || undefined

export default classnames
