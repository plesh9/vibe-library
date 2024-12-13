import { lazyLoad } from '@lib/utils'
import PageLoader from '@widgets/PageLoader'

const TypographyPage = lazyLoad(() => import('./page'), { loading: <PageLoader /> })

export default TypographyPage
