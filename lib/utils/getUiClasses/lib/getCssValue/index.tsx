import type { BaseUiClassesType } from '../../const'
import toPoint from '../toPoint'

const formatDimension = (value: any): string => {
    if (!isNaN(Number(value))) {
        return toPoint(value)
    }

    return value
}

const getCssValue = (key: keyof BaseUiClassesType, value: any): string => {
    const valuesMap: Partial<Record<keyof BaseUiClassesType, (value: any) => string>> = {
        grow: (value) => (value === true ? '1' : '0'),
        gap: toPoint,
        width: formatDimension,
        maxWidth: formatDimension,
        height: formatDimension,
        maxHeight: formatDimension,
        radius: formatDimension,
        cols: (value) => `repeat(${value}, 1fr)`,
        color: (value) => `var(--${value})`,
        backgroundColor: (value) => `var(--${value})`,
        p: toPoint,
        px: (value) => `0 ${toPoint(value)}`,
        py: (value) => `${toPoint(value)} 0`,
        pt: toPoint,
        pr: toPoint,
        pb: toPoint,
        pl: toPoint
    }

    const transformer = valuesMap[key]

    if (typeof transformer === 'function') {
        return transformer(value)
    }

    return `${value}`
}

export default getCssValue
