export default {
    props: ['info'],
    name:'text-note',
    template:`
    <section>
    <h4 class="light-text text-features">{{info.txt}}</h4>
    </section>
    `
}