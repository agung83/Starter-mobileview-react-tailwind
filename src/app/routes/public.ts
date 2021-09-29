import { PageHome, PageAbout } from "../pages";



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
];

export default routes;