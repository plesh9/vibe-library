import type { FC } from 'react'
import type { TextPropsType } from '../Text'
import Text from '../Text'

export type LabelPropsType = TextPropsType & {
    htmlFor?: string
}

const Label: FC<LabelPropsType> = ({ as = 'label', htmlFor, weight = '500', lineHeight = '130', children, ...restProps }) => {
    return (
        <Text as={as} htmlFor={htmlFor} weight={weight} lineHeight={lineHeight} {...restProps}>
            {children}
        </Text>
    )
}

export default Label
