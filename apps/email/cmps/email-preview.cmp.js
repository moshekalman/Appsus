import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    name: 'email-preview',
    template: `
    <section @click="clicked" class="email-preview">
        <p class="sender-name">From: {{email.sender}}</p>
        <p class="addressee-name">To: {{email.addressee}}</p>
        <p class="content">{{email.content}}</p>
        <p class="date-at">{{email.dateAt}}</p>
        <img src="./assets/svgs/trash-solid.svg" class="remove-btn" @click.stop="onRemove">
        <img src="./apps/email/assets/svg/save-solid.svg" class="save-btn" @click.stop="onAddToSaved">
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
            // this.email.saved = !this.email.saved
            if (this.saveBtn === 'save') this.saveBtn = 'unsave'
            else this.saveBtn = 'save'
            emailService.addToSaved(this.email)

        }
    },
    created() {
        if (!this.email.saved) this.saveBtn = 'save'
        else this.saveBtn = 'unsave'
    },
    components: {
        emailService
    }
}