
import headerCmp from './cmps/header.cmp.js'
import {myRouter} from './routes.js'

const app = new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <section> 
        <header-cmp></header-cmp>
    </section>
    `,
    components:{
        headerCmp
    }
});