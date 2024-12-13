import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import { Text } from '../Text'

interface Props extends TextPropsType {
    as?: 'span' | 'p' | 'div'
}

export const Accent: FC<Props> = ({ as = 'span', color = 'blue500', children, ...restProps }) => {
    return (
        <Text as={as} color={color} {...restProps}>
            {children}
        </Text>
    )
}
