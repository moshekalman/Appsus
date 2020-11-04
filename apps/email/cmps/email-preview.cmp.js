import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    name: 'email-preview',
    template: `
    <section class="email-preview">
        <h3 class="sender-name">{{email.sender}}</h3>
        <p class="content">{{email.content}}</p>
        <p class="date-at">{{email.dateAt}}</p>
        <button class="remove-btn" @click.stop="onRemove">remove</button>
        <button class="save-btn" @click.stop="onAddToSaved">save</button>
    </section>
    `,
    methods: {
        onRemove() {
            emailService.remove(this.email.id)
        },
        onAddToSaved() {
            this.email.saved = true
        }
    },
    components: {
        emailService
    }
}