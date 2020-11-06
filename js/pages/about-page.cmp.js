export default {
    name: 'about-page',
    template: `
     <section class="about-page">
        <h1>about us...</h1>
        <nav>
            <button @click="toMoshe" class="note-btn">Moshe</button> | 
            <button @click="toNadav" class="note-btn">Nadav</button>
        </nav>
        <router-view></router-view>
    </section>
    `,
    methods: {
        toMoshe() {
            this.$router.push('/about/moshe')
        },
        toNadav() {
            this.$router.push('/about/nadav')
        }
    }

}