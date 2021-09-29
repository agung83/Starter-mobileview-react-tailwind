
import { memo } from 'react';
import { lazyLoad } from '../../../../utils/lazyLoad.config';

const Header = lazyLoad(
    () => import('./index'),
    module => module.Header,
);

export default memo(Header);