import type { ColorsType, IconsType } from '@lib/const'
import { icons } from '@lib/const'
import { classnames } from '@lib/utils'
import type { FC, SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
    name: IconsType
    color?: ColorsType
}

const Icon: FC<Props> = ({ name, color, className, ...svgProps }) => {
    const Svg = icons[name]

    return <Svg className={classnames(color && `color_${color}`, className)} {...svgProps} />
}

export default Icon
