import { bookService } from '../../services/book-service.js';
import { eventBus } from '../../services/event-bus-service.js';

export default {
    props: ['book'],
    template: `
        <ul class="book-reviews"> 
            <li v-for="review in book.reviews" :key="review.id">
                <h3>Name: {{review.reviewerName}}</h3>
                <h4>rating: {{review.rating}} stars</h4>
                <h5>Read at: {{review.readOn}}</h5>
                <p>review: "{{review.review}}"</p>
                <button class="delete-review-btn" @click="deleteReview(review.id, book)">X</button>
            </li>
        </ul>
   `,
    methods: {
        deleteReview(reviewId, book) {
            console.log(book.reviews);
            bookService.removeReview(reviewId, book)
                .then(book => this.book = book)
                .then(res => {
                    eventBus.$emit('show-success-msg', 'Your review succesfully removed from this book!');
                })
        }
    },
}