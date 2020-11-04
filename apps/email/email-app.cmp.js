import emailList from './pages/email-list.cmp.js'
import emailAdd from './pages/email-add.cmp.js'
import emailFilter from './cmps/email-filter.cmp.js'
import emailNav from './cmps/email-nav.cmp.js'
// import { myRouter } from '../../js/routes.js'
import { emailService } from './services/email-service.js'

export default {
    name: 'email-app',
    // router: myRouter,
    template: `
    <section class="email-app">
        <email-nav @openAddEmail="isShowAddEmail = !isShowAddEmail" @openShowSaved="showOnlySaved = true" @openShowSent="showOnlySent = true" @backToInbox="backToInbox" />
        <email-add v-if="isShowAddEmail" />
        <email-filter v-if="emails" @doFilter="setFilter" />
        <router-view v-if="emails" :emails="emailsToShow" />
        <!-- <email-list v-if="emails" :emails="emailsToShow" /> -->
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
        emailsToShow() {
            var emails = this.emails
            if (this.showOnlySaved) {
                emails = []
                this.emails.forEach(email => {
                    if (email.saved === true) {
                        emails.push(email)
                    }
                })
            }
            if (!this.filterBy) {
                return emails;
            }
            var emailsFilter = []
            const txt = this.filterBy.byWord.toLowerCase();
            emailsFilter = emails.filter(email => {
                return (email.sender.toLowerCase().includes(txt) ||
                    email.content.toLowerCase().includes(txt))
            })
            return emailsFilter
        }
    },
    methods: {
        backToInbox() {
            this.showOnlySaved = false
            this.showOnlySent = false
        },
        getEmailsAfterPromise() {
            emailService.getEmails().then((emails) => this.emails = emails)
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