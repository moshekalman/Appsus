import { emailService } from '../services/email-service.js'


export default {
    name: 'email-add',
    template: `
    <form class="email-add">       
        <label>
            <span>To</span>
            <input type="text" v-model="email.addressee" placeholder="To" />
        </label>        
        <label>
            <span>content</span>
            <textarea type="text" v-model="email.content" placeholder="To" colm=5 rows=10 > </textarea>
        </label>  
        <button class="email-btn" @click.prevent="onSendEmail">Send</button>
    </form>      
    `,
    data() {
        return {
            email: { sender: 'Me', addressee: null, content: null, readed: false, dateAt: null, sent: true }
        }
    },
    computed: {

    },
    methods: {
        getCurrTime() {
            this.email.dateAt = Date.now()
                // var currTime = new Date()
                // this.email.dateAt = `${currTime.getHours()}:${currTime.getMinutes()}`
        },
        onSendEmail() {
            this.$emit('send')
            this.getCurrTime()
            emailService.sendEmail(this.email)
            this.email = { sender: null, addressee: null, content: null, readed: false, dateAt: null }
        }
    },
    components: {
        emailService
    },
}