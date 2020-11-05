export default {
    props: ['info'],
    name: 'text-note',
    template: `
    <section>
        <h4 class="img-title">
        {{info.title}}
        </h4>
        <img class="note-img" v-if="info.url" :src="info.url">
    </section>
    `
}