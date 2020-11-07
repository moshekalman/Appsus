export default {
    name: 'about-page',
    template: `
     <section class="about-page">
        <h2 class="about-us">About us...</h2>
        <nav>
            <button @click="toMoshe" class="note-btn">Moshe</button> | 
            <button @click="toNadav" class="note-btn">Nadav</button>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
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