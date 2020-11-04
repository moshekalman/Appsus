import homePage from './pages/home-page.cmp.js';
// import emailApp from
import notesApp from '../apps/notes/cmps/notes-app.cmp.js';
import noteText from '../apps/notes/cmps/note-text.cmp.js';

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