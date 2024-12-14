import Box from '@lib/ui/Box'
import { type FC } from 'react'

const page: FC = () => {
    return (
        <Box
            className='HELLO'
            aria-atomic='true'
            ui={{
                align: 'center',
                justify: 'center',
                flexDirection: 'row',
                color: 'red500',
                gap: 7,
                px: 10,
                backgroundColor: 'black100',
                lg: {
                    px: 0,
                    py: 20,
                    pt: 30,
                    backgroundColor: 'red500',
                    align: 'end',
                    color: 'black100',
                    justify: 'start',
                    flexDirection: 'row-reverse',
                    gap: 20,
                    radius: '50%',
                    width: '100%'
                },
                md: {
                    p: 0,
                    color: 'green500',
                    backgroundColor: 'black5p',
                    flexDirection: 'column',
                    gap: 3
                }
            }}
        >
            <div>HELLO</div>
            <div>YO</div>
            <div>LINK</div>
        </Box>
    )
}

export default page
