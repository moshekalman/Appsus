import { emailService } from '../services/email-service.js'


export default {
    template: `
        <section v-if="email" class="email-datails">
            <button @click="back">back</button>
            <header class="head-details">
                <p>{{email.sender}}</p>
                <p>{{email.dateAt}}</p>
            </header>
            <main>
                <p>{{email.content}}</p>
            </main>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        back() {
            this.$router.push('/email')
        },
        loadEmail() {
            const id = this.$route.params.emailId
            emailService.getById(id)
                .then(email => this.email = email)
        },
    },
    created() {
        this.loadEmail();
    }
}