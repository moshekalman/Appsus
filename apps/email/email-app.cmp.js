import emailList from './pages/email-list.cmp.js'
import emailAdd from './pages/email-add.cmp.js'
import emailFilter from './cmps/email-filter.cmp.js'
import emailNav from './cmps/email-nav.cmp.js'
// import { myRouter } from '../../js/routes.js'
import { emailSercive } from './services/email-service.js'

export default {
    name: 'email-app',
    // router: myRouter,
    template: `
    <section class="email-app">
        <email-nav @openAddEmail="isShowAddEmail = !isShowAddEmail" @openShowSaved="showOnlySaved = !showOnlySaved" @openShowSent="showOnlySent = !showOnlySent" />
        <email-add v-if="isShowAddEmail" />
        <email-filter @doFilter="setFilter" />
        <email-list v-if="emails" :emails="emailsToShow" />
    </section>
    `,
    data() {
        return {
            filterBy: null,
            emails: null,
            isShowAddEmail: false,
            showOnlySaved: false,
            showOnlySent: false
        }
    },
    computed: {
        setFilterShowSaved() {

        },
        emailsToShow() {
            if (!this.filterBy) {
                return this.emails;
            }
            var emailsFilter = []
            const txt = this.filterBy.byWord.toLowerCase();
            emailsFilter = this.emails.filter(email => {
                return (email.sender.toLowerCase().includes(txt) ||
                    email.content.toLowerCase().includes(txt))
            })
        }
    },
    methods: {
        getEmailsAfterPromise() {
            emailSercive.getEmails().then((emails) => this.emails = emails)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    created() {
        this.getEmailsAfterPromise()
    },
    components: {
        emailList,
        emailAdd,
        emailFilter,
        emailNav,
    }
}