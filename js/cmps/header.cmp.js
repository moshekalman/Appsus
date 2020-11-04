
export default {
    name: `header-cmp`,
    template: `
        <header class="main-header">
            <div class="container header-container flex space-between align-center">
                <h1><router-link class="logo" to="/" exact>Appsus</router-link></h1>
                <nav class="main-nav flex align-center">
                    <ul class="clean-list flex space-between align-center">
                        <li><router-link to="/" exact>Home</router-link></li>
                        <li><router-link to="/" exact>Email</router-link></li>
                        <li><router-link to="/" exact>Notes</router-link></li>
                        <li><router-link to="/" exact>Books</router-link></li>
                        <li><router-link to="/" exact>About</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    `
};