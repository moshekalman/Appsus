var bus = new Vue()

bus.$on('deletedReview', () => {
    console.log('someone puked');
})
bus.$on('ratedSuccesfuly', () => {
    console.log('someone puked');
})

export const eventBus = bus