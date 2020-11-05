

export default {
    template: `
    <section class="home-page container">
        <div class="hero-container">
            <img src="./assets/imgs/hero.jpg"class="hero-img">
            <h2 class="hero-title">APPSUS</h2>
        </div>
        <div class="home-links">
                 <div>
                     <div @click="goEmail" class="router-icn">
                         <i class="far fa-envelope"></i>
                     </div>
                     <h3>Go To <span @click="goEmail">Email</span></h3>
                </div>
                <div>   
                    <div @click="goNotes" class="router-icn">
                        <i class="far fa-sticky-note"></i>
                    </div>
                    <h3>Go To <span @click="goNotes">Notes</span></h3>
                </div>
        </div>
    </section>
    `,
    methods: {
        goEmail(){
            this.$router.push('/email')
        },
        goNotes(){
            this.$router.push('/notes')
        }
    },
};