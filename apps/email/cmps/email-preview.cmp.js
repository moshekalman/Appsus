import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    name: 'email-preview',
    template: `
    <section @click="clicked" class="email-preview" >
        <p class="sender-name" :class="{readed: email.readed}"><span>From:</span> {{email.sender}}</p>
        <!-- <p class="addressee-name" :class="{readed: email.readed}"><span>To:</span> {{email.addressee}}</p> -->
        <p class="content" :class="{readed: email.readed}"><span>{{email.subject}}:</span> {{shortContent}}</p>
        <section>
            <p class="date-at">{{timeToPresent}}</p>
            <div @click.stop="onRemove">
                <i class="remove btn fas fa-trash"></i>
                <!-- <img src="./assets/svgs/trash-solid.svg" class="remove-btn" @click.stop="onRemove"> -->
            </div>
            <div @click.stop="onAddToSaved" :class="{saved: email.saved}">
                <i class="btn fas fa-save"></i>
                <!-- <img src="./apps/email/assets/svg/save-solid.svg" class="btn" @click.stop="onAddToSaved"> -->
                <!-- <button @click.stop="onAddToSaved">save</button> -->
            </div>
        </section>
    </section>
    `,
    data() {
        return {
            shortContent: null,
            timeToPresent: null,
            saveBtn: 'save',
        }
    },
    computed: {

    },
    methods: {
        clicked() {
            emailService.addToReaded(this.email)
            this.$emit('emailClicked')
        },
        onRemove() {
            emailService.remove(this.email.id)
        },
        onAddToSaved() {
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
        },
        getShortContent() {
            const content = JSON.parse(JSON.stringify(this.email.content))
            this.shortContent = content.substring(0, 40) + '...'
        }
    },
    created() {
        if (!this.email.saved) this.saveBtn = 'save'
        else this.saveBtn = 'unsave'
        this.getdateAt()
        this.getShortContent()
    },
    components: {
        emailService
    }
}