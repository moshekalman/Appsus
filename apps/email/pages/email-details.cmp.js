import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../js/services/event-bus-services.js';



export default {
    name: 'email-details',
    template: `
        <section v-if="email" class="email-datails">
            <section>
                <h2 class="subject">{{email.subject}}</h2>
                <h3>To: {{email.addressee}}</h3>
                <header class="head-details">
                    <h3>From: {{email.sender}}</h3>
                    <h3>{{timeToPresent}}</h3>
                </header>
                <p class="content">{{email.content}}</p>
            </section>
            <section class="btns">
                    <button class="email-btn" @click="back">back</button>
                    <button class="email-btn" @click ="onReplay">Replay</button>
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
            eventBus.$emit('replayEmail', this.email)
                // this.$emit('replayEmail', this.email)
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