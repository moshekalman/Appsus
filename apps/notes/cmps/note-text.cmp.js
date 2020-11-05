export default {
    props: ['info'],
    name:'text-note',
    template:`
    <section>
        {{info.txt}}
    </section>
    `
}