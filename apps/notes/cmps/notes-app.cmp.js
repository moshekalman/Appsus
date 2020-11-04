

export default {
    name: 'noteApp',
    template: `
    <section class="notes-container container flex column">
        <div class="add-note flex column">
            <router-view></router-view>
        </div>
        <section class="notes-box">
        </section>
    </section>
    `,
};