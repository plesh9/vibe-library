import Box from '@lib/ui/Box'
import { type FC } from 'react'

const page: FC = () => {
    return (
        <Box
            as='div'
            className='HELLO'
            aria-atomic='true'
            ui={{
                align: 'center',
                justify: 'center',
                flexDirection: 'row',
                gap: 7,
                px: 10,
                lg: {
                    px: 0,
                    py: 20,
                    pt: 30,
                    align: 'end',
                    justify: 'start',
                    flexDirection: 'row-reverse',
                    gap: 20,
                    radius: '50%',
                    width: '100%'
                },
                md: {
                    p: 0,
                    flexDirection: 'column',
                    gap: 3
                }
            }}
        >
            BOX
        </Box>
    )
}

export default page
