




export default {
    name: `filter-note`,
    template: `
    <section class="note-search-container">
    <h3 class="search-header">Search here ↓</h3>
    <div class="search-box">
    <form @submit.prevent="emitSubmit">
    <input class="search-bar" v-model="filterBy" @input type="text">
    <img class="edit-btn search-btn" @click="emitSubmit" src="./assets/svgs/search-solid.svg">
    </form>    
    <button @click="showAll">back</button>
    </div>
    </section>
    `,
    data() {
        return {
            filterBy: null,
        };
    },
    methods: {
        emitSubmit() {
            this.$emit('filtered', this.filterBy.toLowerCase());
            this.filterBy = null;
        },
        showAll() {
            this.filterBy = null;
            this.$emit('filtered', this.filterBy);
        }
    },
};