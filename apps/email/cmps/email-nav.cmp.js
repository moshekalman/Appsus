export default {
    name: 'email-nav',
    template: `
    <section class="email-nav">
      <button @click="toggleNav" class="email-btn hamburger"><i class="fas fa-hamburger"></i></button>
      <nav ref="btns">
        <button class="email-btn" :class="{active: activeBtn === 'btn1'}" @click="addEmail" exact>
            Compose
            <i class="fas fa-at"></i>
        </button>
        <button class="email-btn" :class="{active: activeBtn === 'btn2'}" @click="toInbox" exact>Inbox</button>
        <button class="email-btn" :class="{active: activeBtn === 'btn3'}" @click="showSaved" exact>Saved Items </button>
        <button class="email-btn" :class="{active: activeBtn === 'btn4'}" @click="showSent" exact>Sent Items</button>
      </nav>
    </section>
    `,
    data() {
        return {
            activeBtn: 'btn2',
            showNav: false
        }
    },
    methods: {
        addEmail() {
            if (this.showNav) this.toggleNav()
            this.activeBtn = 'btn1'
            this.$emit('openAddEmail')
        },
        toInbox() {
            if (this.showNav) this.toggleNav()
            this.activeBtn = 'btn2'
            this.$emit('backToInbox')
        },
        showSaved() {
            if (this.showNav) this.toggleNav()
            this.activeBtn = 'btn3'
            this.$emit('openShowSaved')
        },
        showSent() {
            if (this.showNav) this.toggleNav()
            this.activeBtn = 'btn4'
            this.$emit('openShowSent')
        },
        toggleNav() {
            const btns = this.$refs.btns
            console.log(btns);
            if (!this.showNav) {
                console.log(this.showNav);
                this.showNav = true
                btns.style.display = "flex"
            } else {
                console.log(this.showNav);
                this.showNav = false
                btns.style.display = "none"
            }
        }
    },
}