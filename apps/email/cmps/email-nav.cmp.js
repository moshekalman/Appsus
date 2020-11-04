export default {
    name: 'email-nav',
    template: `
      <nav>
        <a @click="AddEmail" exact>Compose</a>
        <router-link to='/email/list' exact>Inbox</router-link>
        <router-link to='/email/saved' exact>Saved Items </router-link>
        <router-link to='/email/sent' exact>Sent Items</router-link>
      </nav>
    `,
    methods: {
        AddEmail() {
            this.$emit('openAddEmail')
        }
    }
}