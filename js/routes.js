import homePage from './pages/home-page.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    }
];

export const myRouter = new VueRouter({ routes: myRoutes });