export default {
    props: ['book'],
    template: `
        <section @click="$emit('clicked',book)" class="previewClass">
           <h3>{{book.title}}</h3>
           <img :src="book.thumbnail" />
           <h5>Price: {{book.listPrice.amount}}{{book.listPrice.currencyCode}}</h5>
           <h4 v-if=book.listPrice.isOnSale>For Sale!</h4>
        </section>
    `,
}