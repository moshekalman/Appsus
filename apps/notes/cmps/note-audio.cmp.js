export default {
    props: ['info'],
    name: 'img-note',
    template: `
    <section>
        <h4 class="img-title text-features">
        {{info.title}}
        </h4>
        <audio v-if="info.url" controls>
            <source :src="info.url" type="audio/ogg">
            <source :src="info.url" type="audio/mpeg">
        </audio>
    </section>
    `
}