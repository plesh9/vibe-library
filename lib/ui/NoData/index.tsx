import { lazyLoad } from '@lib/main'
import Loader from '../Loader'

const NoData = lazyLoad(() => import('./NoData'), { loading: <Loader /> })

export type { NoDataPropsType } from './NoData'
export default NoData
