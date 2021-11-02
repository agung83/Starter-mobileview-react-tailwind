import { lazyLoad } from "../../../utils/lazyLoad.config";


const Search = lazyLoad(
    () => import('./index'), (module) => module.Search
);


export default Search;