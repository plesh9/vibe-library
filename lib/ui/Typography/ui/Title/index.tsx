import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import Text from '../Text'

export type TitlePropsType = TextPropsType & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const sizeMap = {
    h1: '24',
    h2: '20',
    h3: '18',
    h4: '16',
    h5: '14',
    h6: '12'
} as const

const lineHeightMap = {
    h1: '120',
    h2: '120',
    h3: '120',
    h4: '120',
    h5: '130',
    h6: '130'
} as const

const Title: FC<TitlePropsType> = ({ variant = 'h1', weight = '500', lineHeight, size, children, ...restProps }) => {
    return (
        <Text as={variant} size={size || sizeMap[variant]} weight={weight} lineHeight={lineHeight || lineHeightMap[variant]} {...restProps}>
            {children}
        </Text>
    )
}

export default Title
