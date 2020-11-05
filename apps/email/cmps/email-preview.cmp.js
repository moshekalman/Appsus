import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    name: 'email-preview',
    template: `
    <section @click="clicked" class="email-preview">
        <p class="sender-name">From: {{email.sender}}</p>
        <p class="addressee-name">To: {{email.addressee}}</p>
        <p class="content">{{email.content}}</p>
        <p class="date-at">{{timeToPresent}}</p>
        <img src="./assets/svgs/trash-solid.svg" class="remove-btn" @click.stop="onRemove">
        <img src="./apps/email/assets/svg/save-solid.svg" class="save-btn" @click.stop="onAddToSaved">
    </section>
    `,
    data() {
        return {
            timeToPresent: null,
            saveBtn: 'save',
            // readed: false
        }
    },
    computed: {

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

        },
        getdateAt() {
            const time = new Date(this.email.dateAt)
            const currTime = new Date()
            if (time.getDay() === currTime.getDay() &&
                time.getMonth() === currTime.getMonth() &&
                time.getFullYear() === currTime.getFullYear()) {
                this.timeToPresent = `${time.getHours()}:${time.getMinutes()}`
            } else {
                this.timeToPresent = time.toJSON().slice(0, 10).split('-').reverse().join('/')
            }
        }
    },
    created() {
        if (!this.email.saved) this.saveBtn = 'save'
        else this.saveBtn = 'unsave'
        this.getdateAt()
    },
    components: {
        emailService
    }
}