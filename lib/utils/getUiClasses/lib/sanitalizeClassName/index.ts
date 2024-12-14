const sanitizeClassName = (prefix: string, value: string): string => {
    const safeValue = typeof value === 'string' ? value.replace('%', '-percent') : value

    return `${prefix}-${safeValue}`
}

export default sanitizeClassName
