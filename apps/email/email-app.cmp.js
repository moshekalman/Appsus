// import emailList from './pages/email-list.cmp.js'
import emailAdd from './pages/email-add.cmp.js'
import { eventBus } from '../../js/services/event-bus-services.js';

import emailFilter from './cmps/email-filter.cmp.js'
import emailNav from './cmps/email-nav.cmp.js'
import { emailService } from './services/email-service.js'

export default {
    name: 'email-app',
    template: `
    <section class="email-app container">
        <email-nav @openAddEmail="openEmailAdd" @openShowSaved="showSaved" @openShowSent="showSent" @backToInbox="backToInbox" />
        <section class="content">
            <email-filter v-if="emails" @doFilter="setFilter" />
            <main>
                <section class="list">
                    <router-view :emails="emailsToShow" />
                </section>
                <email-add :emailToReply="replayedEmail" v-if="isShowAddEmail" @send="closeEmailAdd" @closeEmailAdd="closeEmailAdd" />
            </main>
        </section>
    </section>
    `,
    data() {
        return {
            filterBy: null,
            emails: null,
            isShowAddEmail: false,
            showOnlySaved: false,
            showOnlySent: false,
            replayedEmail: null
        }
    },
    computed: {
        emailsToShow() {
            if (!this.emails) return
            this.getEmailsAfterPromise()
            var emails = JSON.parse(JSON.stringify(this.emails))
            if (this.showOnlySent) {
                console.log('check');
                emails = []
                this.emails.forEach(email => {
                    console.log(email);
                    if (email.sent === true) {
                        emails.push(email)
                    }
                })
            }
            if (this.showOnlySaved) {
                console.log('check');
                emails = []
                this.emails.forEach(email => {
                    if (email.saved === true) {
                        emails.push(email)
                    }
                })
            }
            var emailsFilter = []
            if (!this.filterBy) {
                if (!this.showOnlySent && !this.showOnlySaved) {
                    this.emails.forEach(email => {
                        if (email.sent === false) {
                            emailsFilter.push(email)
                        }
                    })
                    return emailsFilter
                } else {
                    return emails;
                }
            }
            const txt = this.filterBy.byWord.toLowerCase();
            emailsFilter = emails.filter(email => {
                return (email.sender.toLowerCase().includes(txt) ||
                    email.content.toLowerCase().includes(txt))
            })

            return emailsFilter
        }
    },
    methods: {
        openEmailAdd() {
            this.replayedEmail = null
            this.isShowAddEmail = true
        },
        closeEmailAdd() {
            this.isShowAddEmail = false
            this.$router.push('/email')
        },
        showSent() {
            this.showOnlySent = true
            this.showOnlySaved = false
            this.isShowAddEmail = false
        },
        showSaved() {
            this.showOnlySaved = true
            this.showOnlySent = false
            this.isShowAddEmail = false
        },
        backToInbox() {
            if (!this.isShowAddEmail && !this.$route.params.emailId && !this.showOnlySaved && !this.showOnlySent) return
            this.showOnlySaved = false
            this.showOnlySent = false
            this.isShowAddEmail = false
            if (this.$route.params.emailId) this.$router.push('/email')
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
            // this.replayedEmail = null
        eventBus.$on('replayEmail', replayEmail => {
            this.isShowAddEmail = true
            console.log(replayEmail);
            this.replayedEmail = replayEmail
                // eventBus.$emit('replayedEmail', replayEmail)
        })
    },
    components: {
        // emailList,
        emailAdd,
        emailFilter,
        emailNav,
    }
}