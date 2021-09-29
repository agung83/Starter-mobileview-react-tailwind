import { lazyLoad } from '../../../../utils/lazyLoad.config';



const WidgetFront = lazyLoad(
    () => import('./index'),
    module => module.WidgetFront,
);

export default WidgetFront;