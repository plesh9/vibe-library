import { lazyLoad } from '@lib/main'
import PageLoader from '@widgets/PageLoader'

const AccordionPage = lazyLoad(() => import('./page'), { loading: <PageLoader /> })

export default AccordionPage
