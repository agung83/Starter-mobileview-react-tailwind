import { memo } from 'react';
import { lazyLoad } from "../../../../utils/lazyLoad.config";


const Footer = lazyLoad(
    () => import('./index'), (module) => module.Footer
);


export default memo(Footer)