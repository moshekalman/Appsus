export default {
    name: 'email-nav',
    template: `
      <nav>
        <button @click="addEmail" exact>Compose</button>
        <router-link to='/email/list' exact>Inbox</router-link>
        <button @click="showSaved" exact>Saved Items </button>
        <button @click="showSent" exact>Sent Items</button>
      </nav>
    `,
    methods: {
        addEmail() {
            this.$emit('openAddEmail')
        },
        showSaved() {
            this.$emit('openShowSaved')
        },
        showSent() {
            this.$emit('openShowSent')
        }

    }
}