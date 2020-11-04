export default {
    props: ['email'],
    name: 'email-preview',
    template: `
    <section @click="$emit('clicked',email)" class="email-preview">
        <h3 class="sender-name">{{email.sender}}</h3>
        <p class="content">{{email.content}}</p>
        <p class="date-at">{{email.dateAt}}</p>
        <button class="remove">remove</button>
    </section>
    `
}