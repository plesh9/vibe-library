import { Accent, Label, Text, Title } from '@lib/main'
import type { FC } from 'react'

const page: FC = () => {
    return (
        <>
            <Title>Typography</Title>
            <Text>This is a paragraph</Text>
            <Accent>This is an accent</Accent>
            <Label>This is a label</Label>
        </>
    )
}

export default page
