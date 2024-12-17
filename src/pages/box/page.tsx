import Box from '@lib/ui/Box'
import { type FC } from 'react'

const page: FC = () => {
    return (
        <Box
            ui={{
                align: 'center',
                justify: 'center',
                backgroundColor: 'blue500',
                color: 'white100',
                radius: 10,
                p: 20,
                lg: {
                    p: 15,
                    radius: 6,
                    backgroundColor: 'red500'
                },
                md: {
                    p: 10,
                    radius: 4,
                    backgroundColor: 'green500'
                }
            }}
        >
            Box
        </Box>
    )
}

export default page
