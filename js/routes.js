import homePage from './pages/home-page.cmp.js';
import notesApp from '../apps/notes/cmps/notes-app.cmp.js';
import noteText from '../apps/notes/cmps/note-text.cmp.js';
import emailApp from '../apps/email/email-app.cmp.js'
import emailNavCmp from '../apps/email/cmps/email-nav.cmp.js';
import emailListCmp from '../apps/email/cmps/email-list.cmp.js';
import emailFilterCmp from '../apps/email/cmps/email-filter.cmp.js';
import emailAddCmp from '../apps/email/cmps/email-add.cmp.js';
import emailSaved from '../apps/email/cmps/email-saved.cmp.js'
import emailSent from '../apps/email/cmps/email-sent.cmp.js'

// import notesApp from

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp,
        children: [{
                path: 'list',
                component: emailListCmp
            },
            {
                path: 'save',
                component: emailSaved
            },
            {
                path: 'sent',
                component: emailSant
            },
        ]
    },
    {
        path: '/notes',
        component: notesApp,
        children: [
            {
                path: ':text?',
                component: noteText
            }
        ]
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });