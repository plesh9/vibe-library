import type { FC, ReactNode } from 'react'
import Text from '../Typography'
import EmptyFolder from './assets/empty-table-folder.svg'
import s from './NoData.module.scss'

export interface NoDataPropsType {
    image?: string
    title?: string
    subtitle?: string | boolean
    children?: ReactNode
}

const NoData: FC<NoDataPropsType> = ({ image = EmptyFolder, title = 'No results', subtitle = 'There are no data', children }) => {
    return (
        <div className={s.main}>
            <div className={s.main_box}>
                <img src={image} alt='no-data' width={68} height={68} decoding='async' loading='lazy' />
                <Text size='20' laptopSize='16' weight='500' align='center'>
                    {title}
                </Text>
                {subtitle && (
                    <Text className={s.main_subtitle} laptopSize='12' align='center'>
                        {subtitle}
                    </Text>
                )}
            </div>
            {children}
        </div>
    )
}

export default NoData
