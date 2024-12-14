import { POINT } from '../../const'

const toPoint = (value: number): string => {
    const roundetValue = Math.round(value * POINT)

    return `${roundetValue}px`
}

export default toPoint
