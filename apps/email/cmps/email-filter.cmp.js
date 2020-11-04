export default {
    template: `
        <section class="email-filter">
            <h3>Filter those emails</h3>
            <input type="text" v-model="filterBy.byWord" placeholder="Search by word" @input="emitFilter" />
        </section>
    `,
    data() {
        return {
            filterBy: { byWord: '' }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}