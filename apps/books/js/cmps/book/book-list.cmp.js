import bookPreview from './book-preview.cmp.js';


export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <h3 >Our Books</h3>
            <h2 v-if="books.length===0">There is no match</h2>
            <ul v-else>
                <li v-for="currBook in books" :key="currBook.id" >
                   <book-preview :book="currBook" @click.native="bookClicked(currBook)" />
                </li>
            </ul>
        </section>
    `,
    methods: {
        emitRemove(bookId) {
            this.$emit('remove', bookId)
        },
        bookClicked(currBook) {
            this.$router.push(`/book/${currBook.id}`)
        }
    },
    components: {
        bookPreview,
    }
}