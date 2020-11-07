export default {
    name: `header-cmp`,
    template: `
        <header class="main-header">
            <div class="container header-container flex space-between align-center">
                <h1><router-link class="logo" to="/" exact>Appsus</router-link></h1>
                <nav class="main-nav flex align-center">
                    <button @click="toggleMainNav" class="hamburger"><i class="fas fa-hamburger"></i></button>
                    <ul ref="nav" class="clean-list flex space-between align-center">
                        <li><router-link to="/" exact>Home</router-link></li>
                        <li><router-link to="/email" exact>Email</router-link></li>
                        <li><router-link to="/notes" exact>Notes</router-link></li>
                        <li><router-link to="/" exact>Books</router-link></li>
                        <li><router-link to="/about" exact>About</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    `,
    data() {
        return {
            showNav: false
        }
    },
    methods: {
        toggleMainNav() {
            const nav = this.$refs.nav
            console.log(nav);
            if (!this.showNav) {
                console.log(this.showNav);
                this.showNav = true
                nav.style.display = "flex"
                nav.style.marginTop = "0px"
            } else {
                console.log(this.showNav);
                this.showNav = false
                nav.style.marginTop = "105px"
                nav.style.display = "none"
            }
        }
    },
    created() {
        this.toggleMainNav()
    }

}