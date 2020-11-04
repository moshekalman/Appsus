import homePage from './pages/home-page.cmp.js';
// import emailApp from
// import notesApp from

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        // component: emailApp
    },
    {
        path: '/notes',
        // component: notesApp
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });