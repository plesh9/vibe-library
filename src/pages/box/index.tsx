import { lazyLoad } from '@lib/main'
import PageLoader from '@widgets/PageLoader'

const BoxPage = lazyLoad(() => import('./page'), { loading: <PageLoader /> })

export default BoxPage
