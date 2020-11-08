export default {
    props: ['txt'],
    template: `
    <section class="bookDesc">
      <span class="bookDesc"><span>Description:</span> {{desc}}</span>
      <button v-if="this.txt.length > 100" @click="toggleDesc">{{btnDesc}}</button>
    </section>
    `,
    data() {
        return {
            btnDesc: 'show less',
            desc: this.txt,
        }
    },
    methods: {
        toggleDesc(txt) {
            if (this.btnDesc === 'show less') {
                this.btnDesc = 'show more'
                if (this.txt.length <= 100) this.desc = this.txt
                else this.desc = this.txt.substr(0, 100) + '...';
            } else {
                this.btnDesc = 'show less'
                this.desc = this.txt
            }
        }
    },
    created() {
        this.toggleDesc()
    }
}