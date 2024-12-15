import type { FC, SVGProps } from 'react'
import { type ColorsType } from '../../const/colors'
import ICONS, { type IconsType } from '../../const/icons'
import classnames from '../../utils/classnames'

export interface IconPropsType extends SVGProps<SVGSVGElement> {
    name: IconsType
    color?: ColorsType
}

const Icon: FC<IconPropsType> = ({ name, color, className, ...svgProps }) => {
    const Svg = ICONS[name]

    return <Svg className={classnames(color && `color_${color}`, className)} {...svgProps} />
}

export default Icon
