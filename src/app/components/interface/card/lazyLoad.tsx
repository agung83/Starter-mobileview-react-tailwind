import { lazyLoad } from '../../../../utils/lazyLoad.config';



const Card = lazyLoad(
    () => import('./index'), (module) => module.Card
)


export default Card;