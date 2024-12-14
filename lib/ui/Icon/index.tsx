import type { ColorsType, IconsType } from '@lib/const'
import ICONS from '@lib/const/icons'
import { classnames } from '@lib/utils'
import type { FC, SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
    name: IconsType
    color?: ColorsType
}

const Icon: FC<Props> = ({ name, color, className, ...svgProps }) => {
    const Svg = ICONS[name]

    return <Svg className={classnames(color && `color_${color}`, className)} {...svgProps} />
}

export default Icon
