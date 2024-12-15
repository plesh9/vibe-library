import lazyLoad from '../../utils/lazyLoad'

const Loader = lazyLoad(() => import('./Loader'))

export type { LoaderPropsType } from './Loader'
export default Loader
