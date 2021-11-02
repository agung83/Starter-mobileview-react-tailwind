import { memo } from "react";
import { lazyLoad } from "../../../../utils/lazyLoad.config";


const AlertComponents = lazyLoad(
    () => import('./index'), (module) => module.AlertComponents
)

export default memo(AlertComponents);