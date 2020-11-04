
import headerCmp from './cmps/header.cmp.js'
import footerCmp from './cmps/footer.cmp.js'
import {myRouter} from './routes.js'

const app = new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <section> 
        <header-cmp></header-cmp>
        <router-view></router-view>
        <footer-cmp></footer-cmp>
    </section>
    `,
    components:{
        headerCmp,
        footerCmp
    }
});