import { eventBus } from '../services/event-bus-service.js'


export default {
    template: `
        <section v-show="msg" class="user-msg">
            <p>{{msg}}</p>
            <button @click="msg=null">x</button>
        </section>
    `,
    data() {
        return {
            msg: null,
            timer: null
        }
    },
    created() {
        eventBus.$on('show-success-msg', msg => {
            this.msg = msg
            if (this.timer) clearInterval()
            this.timer = setTimeout(() => {
                this.msg = null
            }, 3000)
        })
    }
}