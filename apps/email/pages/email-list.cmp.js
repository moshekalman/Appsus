import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    props: ['emails'],
    name: 'email-list',
    template: `
    <section class="email-list">
        <h3>Our Emails</h3>
        <h2 v-if="!emails">There is no match emails</h2>
        <ul v-else>
            <li v-for="currEmail in emails" :key="currEmail.id" >
               <email-preview @emailClicked="emailClicked(currEmail)" :email="currEmail" />
            </li>
        </ul>
    </section>
`,
    methods: {
        emailClicked(currEmail) {
            currEmail.readed = true
                // this.$emit('clicked', currEmail)
            this.$router.push(`/email/email-details/${currEmail.id}`)
        }
    },
    components: {
        emailPreview,
    }
}