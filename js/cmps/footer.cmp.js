export default {
    name: `header-cmp`,
    template: `
    <footer class="main-footer">
        <div class="container footer-container flex column align-center">
            <h1><router-link class="logo footer-logo" to="/" exact>Appsus</router-link></h1>
            <nav class="footer-nav">
                <a class="brands facebook" href=""></a>
                <a class="brands instagram" href=""></a>
                <a class="brands linkedin" href=""></a>
                <a class="brands github" href=""></a>
            </nav>
            <h5 class="coffee-rights">© 2020 N&M - All Rights Reserved - Find more at <span>Our Site</span></h5>
        </div>
    </footer>
    `
};