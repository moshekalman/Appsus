
export default {
    props: ['note'],
    name: 'saved-note',
    template: `
    <section class="saved-note flex column align-center">
        <div class="saved-text">
            {{note.info.txt}}
        </div>
        <div class="edit-btns flex space-between align-center">
            <img @click="emitDelete(note.id)" src="./assets/svgs/trash-solid.svg" class="edit-btn">
            <img @click="emitEdit(note.id)" src="./apps/notes/assets/svgs/edit-solid.svg" class="edit-btn">
            <label>
            <img src="./apps/notes/assets/svgs/edit-solid.svg" class="edit-btn">
                <input v-model="bgColor" @change="changeColor()" type="color" hidden>
            </label>
        </div>
    </section>
    `,
    data() {
        return {
            bgColor: null
        };
    },
    methods: {
        emitDelete(id) {
            this.$emit('onDeleteEv', id);
        },
        emitEdit(id) {
            this.$emit('onEditEv', id);
        },
        changeColor() {
            console.log('changed', this.bgColor);
        }
    },
};