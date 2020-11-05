export default {
    name: 'email-nav',
    template: `
      <nav>
        <button class="email-btn" :class="{active: activeBtn === 'btn1'}" @click="addEmail" exact>Compose
        <i class="fas fa-at"></i>
        </button>
        <button class="email-btn" :class="{active: activeBtn === 'btn2'}" @click="toInbox" exact>Inbox</button>
        <button class="email-btn" :class="{active: activeBtn === 'btn3'}" @click="showSaved" exact>Saved Items </button>
        <button class="email-btn" :class="{active: activeBtn === 'btn4'}" @click="showSent" exact>Sent Items</button>
      </nav>
    `,
    data() {
        return {
            activeBtn: 'btn2'
        }
    },
    methods: {
        addEmail() {
            this.activeBtn = 'btn1'
            this.$emit('openAddEmail')
        },
        toInbox() {
            this.activeBtn = 'btn2'
            this.$emit('backToInbox')
        },
        showSaved() {
            this.activeBtn = 'btn3'
            this.$emit('openShowSaved')
        },
        showSent() {
            this.activeBtn = 'btn4'
            this.$emit('openShowSent')
        },

    }
}