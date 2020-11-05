import { emailService } from '../services/email-service.js'


export default {
    name: 'email-add',
    template: `
    <section class="email-add">
        <div class="add-form">
                <section class="head-form">
                    <span>New Massege</span>    
                    <button class="btn-close" @click="closeAdd"><i class="far fa-times-circle"></i></button>   
                </section>
            <label>
                <!-- <span>To</span> -->
                <input type="text" v-model="email.addressee" placeholder="To" />
            </label> 
            <label>
                <!-- <span>Subject</span> -->
                <input type="text" v-model="email.subject" placeholder="Subject" />     
            </label>
                <!-- <span>content</span> -->
                <textarea type="text" v-model="email.content" placeholder="Write Your Massege" colm=5 rows=10 > </textarea>
            </label> 
            <div> 
                <button class="send-btn" @click.prevent="onSendEmail"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>  
    </section>    
    `,
    data() {
        return {
            email: { sender: 'Me (nadavkomo@gmail.com)', addressee: null, subject: null, content: null, readed: false, dateAt: null, sent: true }
        }
    },
    computed: {

    },
    methods: {
        closeAdd() {
            this.$emit('closeEmailAdd')
        },
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