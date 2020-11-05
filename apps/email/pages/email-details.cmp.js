import { emailService } from '../services/email-service.js'

export default {
    name: 'email-details',
    template: `
        <section v-if="email" class="email-datails">
            <section>
                <h2 class="subject">{{email.subject}}</h2>
                <header class="head-details">
                    <h3>{{email.sender}}</h3>
                    <h3>{{timeToPresent}}</h3>
                </header>
                <p class="content">{{email.content}}</p>
            </section>
            <section class="btns">
                    <button @click="back">back</button>
                    <button @click ="onReplay">Replay</button>
                    <button>Answer</button>
            </section>
        </section>
    `,
    data() {
        return {
            email: null,
            timeToPresent: null
        }
    },
    methods: {
        onReplay() {
            this.$emit('replayEmail', this.email)
        },
        getDatePresent(email) {
            this.timeToPresent = emailService.getDateAt(email)
        },
        back() {
            this.$router.push('/email')
        },
        loadEmail() {
            const id = this.$route.params.emailId
            emailService.getById(id)
                .then(email => {
                    this.email = email
                    this.getDatePresent(this.email)
                });
        },
    },
    created() {
        this.loadEmail();
    }
}