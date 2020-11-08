import { bookService } from '../../services/book-service.js';
import { eventBus } from '../../services/event-bus-service.js';


export default {
    props: ['book'],
    template: `
            <section class="review-section">
                <form>
                    <label>Your name:
                    <input ref="theInput" type="text" placeholder="Enter your name please" v-model="reviewerName" />
                    </label>
                    <label>Read at:
                    <input type="date" v-model="readOn" />
                    </label>
                    <span>Book name: {{book.title}}</span>
                    <label>
                    <textarea type="text" maxLength="320" cols="70" rows="8" placeholder="Enter your review please" v-model="currReview" ></textarea>
                    </label>
                    <section class="rate-section">
                        <a class="far fa-star" :class="{ 'fas fa-star checked': rating >= 1 }" @click="rateThis(1)"></a>
                        <a class="far fa-star" :class="{ 'fas fa-star checked': rating >= 2 }" @click="rateThis(2)"></a>
                        <a class="far fa-star" :class="{ 'fas fa-star checked': rating >= 3 }" @click="rateThis(3)"></a>
                        <a class="far fa-star" :class="{ 'fas fa-star checked': rating >= 4 }" @click="rateThis(4)"></a>
                        <a class="far fa-star" :class="{ 'fas fa-star checked': rating >= 5 }" @click="rateThis(5)"></a>
                    </section>

                    <div class="form-submit-btns">
                        <button class="review-submit-btn" @click.prevent="saveReview">Submit review</button>
                        <button class="review-cancel-btn" @click="closeReview">cancel</button>
                    </div>
                </form>
            </section>

    `,
    data() {
        return {
            reviewerName: '',
            currReview: '',
            rating: 0,
            readOn: null,
            isReviewing: false,
        }
    },
    methods: {
        saveReview() {
            const review = { reviewerName: this.reviewerName, review: this.currReview, rating: this.rating, readOn: this.readOn };
            bookService.saveBookReview(this.book, review)
                .then(res => {
                    this.reviewerName = '';
                    this.currReview = '';
                }).then(res => this.closeReview())
                .then(res => {
                    eventBus.$emit('show-success-msg', 'Your review succesfully added to this book!', );
                })
                // .catch(err, console.log('There has been an Error: ', err));
        },
        closeReview() {
            this.$emit('submitted');
        },
        rateThis(value) {
            this.rating = value;
        }
    },
    mounted() {
        this.$refs.theInput.focus();
    }
}