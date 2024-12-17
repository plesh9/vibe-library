import { lazyLoad } from '@lib/main'
import PageLoader from '@widgets/PageLoader'

const LoaderPage = lazyLoad(() => import('./page'), { loading: <PageLoader /> })

export default LoaderPage
