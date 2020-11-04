import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    name: 'email-preview',
    template: `
    <section @click="clicked" class="email-preview">
        <h3 class="sender-name">{{email.sender}}</h3>
        <p class="content">{{email.content}}</p>
        <p class="date-at">{{email.dateAt}}</p>
        <button class="remove-btn" @click.stop="onRemove">remove</button>
        <button class="save-btn" @click.stop="onAddToSaved">{{saveBtn}}</button>
    </section>
    `,
    data() {
        return {
            saveBtn: 'save',
            // readed: false
        }
    },
    methods: {
        clicked() {
            this.$emit('emailClicked')
        },
        onRemove() {
            emailService.remove(this.email.id)
        },
        onAddToSaved() {
            this.email.saved = !this.email.saved
            if (this.email.saved) this.saveBtn = 'unsave'
            else this.saveBtn = 'save'
        }
    },
    components: {
        emailService
    }
}