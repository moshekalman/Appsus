export default {
    template: `
        <section class="book-filter">
            <h3>Filter those books</h3>
            <input type="text" v-model="filterBy.byTitle" placeholder="Search by name" @input="emitFilter" />
            <label>From price
              <input type="number" v-model="filterBy.fromPrice" @input="emitFilter" /> 
            </label>
            <label> To price
              <input type="number" v-model="filterBy.toPrice" @input="emitFilter" />
            </label>
            <label>
                <input type="checkbox" v-model="filterBy.isActive" @input="emitFilter" /> 
                    <h4>Filter</h4>
            </label>
        </section>
    `,
    data() {
        return {
            filterBy: { byTitle: '', fromPrice: 0, toPrice: null, isActive: false }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}