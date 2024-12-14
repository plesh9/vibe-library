import type { ColorsType, IconsType } from '@lib/main'
import { classnames, ICONS } from '@lib/main'
import type { FC, SVGProps } from 'react'

export interface IconPropsType extends SVGProps<SVGSVGElement> {
    name: IconsType
    color?: ColorsType
}

const Icon: FC<IconPropsType> = ({ name, color, className, ...svgProps }) => {
    const Svg = ICONS[name]

    return <Svg className={classnames(color && `color_${color}`, className)} {...svgProps} />
}

export default Icon
