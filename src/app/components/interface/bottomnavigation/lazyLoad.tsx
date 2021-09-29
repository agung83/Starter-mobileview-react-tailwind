import { memo } from "react";
import { lazyLoad } from "../../../../utils/lazyLoad.config";



const BottomNav = lazyLoad(
    () => import('./index'), (module) => module.BottomNav
);

export default memo(BottomNav);