import { lazyLoad } from '@lib/main'
import PageLoader from '@widgets/PageLoader'

const NoDataPage = lazyLoad(() => import('./page'), { loading: <PageLoader /> })

export default NoDataPage
