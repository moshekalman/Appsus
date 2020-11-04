
export default {
    name: `header-cmp`,
    template: `
    <section class="header-box">
        <div class="container header-container flex space-between">
            <h1 class="logo">Appsus</h1>
            <nav class="main-nav">
                <ul class="clean-list flex space-between">
                    <li><router-link to="/" exact>Home</router-link></li>
                    <li><router-link to="/" exact>Email</router-link></li>
                    <li><router-link to="/" exact>Notes</router-link></li>
                    <li><router-link to="/" exact>Books</router-link></li>
                    <li><router-link to="/" exact>About</router-link></li>
                </ul>
            </nav>
        </div>
    </section>
    `
};