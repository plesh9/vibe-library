import { lazyLoad } from '@lib/utils'
import Loader from '../Loader'

const NoData = lazyLoad(() => import('./NoData'), { loading: <Loader /> })

export default NoData
