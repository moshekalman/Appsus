// import emailList from './cmps/email-list.cmp.js'
// import emailAdd from './cmps/email-add.cmp.js'
// import emailSaved from './cmps/email-saved.cmp.js'
// import emailSent from './cmps/email-sent.cmp.js'
// import emailNav from './cmps/email-nav.cmp.js'
// import { myRouter } from './routes.js'

export default {
    name: 'email-app',
    router: myRouter,
    template: `
    <section class="email-app">
        <email-nav />
        <router-view/>
    </section>
    `,
    components: {
        emailList,
        emailAdd,
        emailNav,
        emailSaved,
        emailSent
    }
}