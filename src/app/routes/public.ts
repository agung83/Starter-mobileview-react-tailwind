import { PageHome, PageAbout, Search, SagaTesting } from "../pages";



const routes = [
    {
        key: 'page-home',
        name: 'page-home',
        component: PageHome,
        path: '/',
    },
    {
        key: 'page-about',
        name: 'page-about',
        component: PageAbout,
        path: '/about',
    },
    {
        key: 'page-search',
        name: 'page-search',
        component: Search,
        path: '/search',
    },
    {
        key: 'page-saga',
        name: 'page-saga',
        component: SagaTesting,
        path: '/saga-testing',
    },
];

export default routes;