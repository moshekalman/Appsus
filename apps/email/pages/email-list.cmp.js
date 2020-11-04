// import { emailService } from '../services/email-service.js'
import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props: ['emails'],
    name: 'email-list',
    template: `
    <section class="email-list">
        <h3 >Our Emails</h3>
        <h2 v-if="emails.length===0">There is no match emails</h2>
        <ul v-else>
            <li v-for="currEmail in emails" :key="currEmail.id" >
               <email-preview :email="currEmail" @click.native="emailClicked(currEmail)" />
            </li>
        </ul>
    </section>
`,
    methods: {
        emitRemove(emailId) {
            this.$emit('remove', emailId)
        },
        bookClicked(currBook) {
            this.$router.push(`/book/${currBook.id}`)
        }
    },
    components: {
        emailPreview,
    }
}