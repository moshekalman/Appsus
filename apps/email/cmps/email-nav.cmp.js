export default {
    name: 'email-nav',
    template: `
      <nav>
        <router-link to='/email/add' exact>Compose</router-link>
        <router-link to='/email/list' exact>Inbox</router-link>
        <router-link to='/email/saved' exact>Inbox</router-link>
        <router-link to='/email/sent' exact>sents</router-link>
      </nav>
    `
}