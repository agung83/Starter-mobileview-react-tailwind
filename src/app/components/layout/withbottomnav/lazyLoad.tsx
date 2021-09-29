import { memo } from "react";
import { lazyLoad } from "../../../../utils/lazyLoad.config";



const WithBottomNav = lazyLoad(
    () => import('./index'), (module) => module.WithBottomNav
);


export default memo(WithBottomNav)