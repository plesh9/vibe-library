import Button from '@lib/ui/Button'
import { useState, type FC } from 'react'

const page: FC = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <>
            <Button onClick={() => setIsLoaded(true)} loading={isLoaded}>
                Click me
            </Button>
            <Button onClick={() => setIsLoaded(false)}>Click me</Button>
        </>
    )
}

export default page
