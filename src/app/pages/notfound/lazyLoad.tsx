import { lazyLoad } from "../../../utils/lazyLoad.config";


const NotFound = lazyLoad(() => import('./index'), module => module.NotFound,)

export default NotFound;