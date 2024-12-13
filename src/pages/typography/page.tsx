import Text, { Accent, Label, Title } from '@lib/ui/Typography'
import type { FC } from 'react'

const page: FC = () => {
    return (
        <>
            <Title variant='h1'>Typography</Title>
            <Text>This is a paragraph</Text>
            <Accent>This is an accent</Accent>
            <Label>This is a label</Label>
        </>
    )
}

export default page
