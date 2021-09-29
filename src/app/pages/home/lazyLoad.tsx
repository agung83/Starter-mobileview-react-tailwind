import { lazyLoad } from '../../../utils/lazyLoad.config';


const PageHome = lazyLoad(
    () => import('./index'),
    module => module.PageHome,
);

export default PageHome;