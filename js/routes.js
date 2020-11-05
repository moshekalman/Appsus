import homePage from './pages/home-page.cmp.js';
import notesApp from '../apps/notes/cmps/notes-app.cmp.js';
import noteText from '../apps/notes/cmps/note-text.cmp.js';
import emailApp from '../apps/email/email-app.cmp.js'
import emailList from '../apps/email/pages/email-list.cmp.js';
import emailDetails from '../apps/email/pages/email-details.cmp.js'

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
        children: [{
            path: ':text?',
            component: noteText
        }]
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });