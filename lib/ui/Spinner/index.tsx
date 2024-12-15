import lazyLoad from '../../utils/lazyLoad'

const Spinner = lazyLoad(() => import('./Spinner'))

export type { SpinnerPropsType } from './Spinner'
export default Spinner
