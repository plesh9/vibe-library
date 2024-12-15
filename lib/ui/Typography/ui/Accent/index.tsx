import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import Text from '../Text'

export type AccentPropsType = TextPropsType

const Accent: FC<AccentPropsType> = ({ as = 'span', color = 'blue500', children, ...restProps }) => {
    return (
        <Text as={as} color={color} {...restProps}>
            {children}
        </Text>
    )
}

export default Accent
