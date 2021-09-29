import { lazyLoad } from "../../../utils/lazyLoad.config";

const PageAbout = lazyLoad(
    () => import('./index'), module => module.PageAbout,
)

export default PageAbout