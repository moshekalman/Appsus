import homePage from './pages/home-page.cmp.js';
import notesApp from '../apps/notes/cmps/notes-app.cmp.js';
import emailApp from '../apps/email/email-app.cmp.js'
import emailList from '../apps/email/pages/email-list.cmp.js';
import emailDetails from '../apps/email/pages/email-details.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import aboutMoshe from './cmps/about-moshe.cmp.js'
import aboutNadav from './cmps/about-nadav.cmp.js'

// import notesApp from

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp,
        children: [{
                path: 'email-details/:emailId',
                component: emailDetails
            },
            {
                path: '',
                component: emailList
            },
        ]
    },
    {
        path: '/notes',
        component: notesApp,
    },
    {
        path: '/about',
        component: aboutPage,
        children: [{
                path: 'moshe',
                component: aboutMoshe
            },
            {
                path: 'nadav',
                component: aboutNadav
            }
        ]
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });