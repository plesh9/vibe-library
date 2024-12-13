import { lazyLoad } from '@lib/utils'
import PageLoader from '@widgets/PageLoader'

const ButtonPage = lazyLoad(() => import('./page'), { loading: <PageLoader /> })

export default ButtonPage
