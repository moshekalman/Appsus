export default {
    props: ['info'],
    name: 'vid-note',
    template: `
    <section>
        <h4 class="vid-title text-features">
        {{info.title}}
        </h4>
        <iframe class="video-note note-frame" v-if="info.url"   :src="embededUrl" :title="info.title"></iframe>
    </section>
    `,
    computed: {
        embededUrl() {
            const url = this.info.url;
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);

            const embededId = (match && match[2].length === 11)
                ? match[2]
                : null;

            return `//www.youtube.com/embed/${embededId}`
        }
    },
}