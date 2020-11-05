import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    name: 'email-saved',
    template: `
    <h3 v-if="!emails">there is no saved emails to show</h3>
    <ul v-else>
        <li v-for="currEmail in emails" :key="currEmail.id" >
            <email-preview @emailClicked="emailClicked(currEmail)" :email="currEmail" />
        </li>
    </ul>
    `,
    components: {
        emailPreview
    },
    methods: {
        emailClicked(currEmail) {
            currEmail.readed = true
            this.$router.push(`/email/email-details/${currEmail.id}`)
        }
    }

}