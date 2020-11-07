import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../js/services/event-bus-services.js';


export default {
    props: ['emailToReply'],
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
            this.emailToReply = null
            this.email = { sender: 'Me (nadavkomo@gmail.com)', addressee: null, subject: null, content: null, readed: false, dateAt: null, sent: true }
        },
        getCurrTime() {
            this.email.dateAt = Date.now()
        },
        onSendEmail() {
            // this.emailToReply = null
            console.log(this.email);
            this.$emit('send')
            this.getCurrTime()
            emailService.sendEmail(this.email)
            this.$router.push('/email')
            this.email = { sender: 'Me (nadavkomo@gmail.com)', addressee: null, subject: null, content: null, readed: false, dateAt: null, sent: true }
            this.emailToReply = null
                // this.email = { sender: null, addressee: null, content: null, readed: false, dateAt: null }
        }
    },
    created() {
        console.log(this.emailToReply);
        this.email = { sender: 'Me (nadavkomo@gmail.com)', addressee: null, subject: null, content: null, readed: false, dateAt: null, sent: true }
        if (this.emailToReply) {
            console.log('hi');
            const copyEmailToReplay = JSON.parse(JSON.stringify(this.emailToReply))
            copyEmailToReplay.content = '\n' + copyEmailToReplay.content
            this.email = copyEmailToReplay
            this.email.addressee = JSON.parse(JSON.stringify(this.emailToReply.sender))
            this.email.subject = `Re: ${copyEmailToReplay.subject}`
            this.email.sent = true
            this.email.readed = false
            this.email.sender = JSON.parse(JSON.stringify(this.emailToReply.addressee))
        }
        console.log(this.email);
        // eventBus.$on('replayEmail', replayEmail => {
        //     console.log('hi');
        //     // const timeToPresent = emailService.getDateAt(replayEmail)
        //     // const HTMLstr = `
        //     //         <span class="subjectRe">Re:${replayEmail.subject}</span>
        //     //         <span class="senderRe">From: ${replayEmail.sender}</span>
        //     //         <span class="addresseeRe">To: ${replayEmail.addressee}</span>
        //     //         <span class="timeRe">${timeToPresent}</span>
        //     //         <p class="contentRe">${replayEmail.content}</p>
        //     // `
        //     // this.email.content = HTMLstr
        //     console.log(this.email);
        // })
    },
    components: {
        emailService,
        // eventBus
    },
}