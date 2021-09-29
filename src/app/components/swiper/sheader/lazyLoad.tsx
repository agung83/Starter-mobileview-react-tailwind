import { memo } from 'react';
import { lazyLoad } from "../../../../utils/lazyLoad.config";


const SwiperHeader = lazyLoad(
    () => import('./index'), (module) => module.SwiperHeader
);

export default memo(SwiperHeader);