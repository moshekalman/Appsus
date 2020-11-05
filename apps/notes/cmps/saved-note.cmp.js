import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['note'],
    name: 'saved-note',
    template: `
    <section class="saved-note flex column align-center" :style="{backgroundColor:bgColor, color}">
        <div class="saved-text">
            <component :is="note.type" :info="note.info" :id="note.id"></component>
        </div>
        <div class="edit-btns flex space-between align-center">
            <img @click="emitDelete(note.id)" src="./assets/svgs/trash-solid.svg" class="edit-btn">
            <img @click="emitEdit(note.id)" src="./apps/notes/assets/svgs/edit-solid.svg" class="edit-btn">

                <label class="relative-label flex just-center align-center">
                    <img src="./apps/notes/assets/svgs/palette-solid.svg" class="edit-btn">
                    <input v-model="bgColor" @change="onEmitChangeBgColor" type="color" class="color-input">
                </label>
                <label class="relative-label flex just-center align-center">
                    <img src="./apps/notes/assets/svgs/paint-brush-solid.svg" class="edit-btn">
                    <input v-model="color" @change="onEmitChangeColor" type="color" class="color-input">
                </label>
        </div>
    </section>
    `,
    data() {
        return {
            bgColor: null,
            color: null
        };
    },
    methods: {
        emitDelete(id) {
            this.$emit('onDeleteEv', id);
        },
        emitEdit(id) {
            this.$emit('onEditEv', id);
        },
        onEmitChangeBgColor() {
            this.$emit('emitBgcChange', { bgc: this.bgColor, id: this.note.id });
        },
        onEmitChangeColor() {
            this.$emit('emitColorChange', { color: this.color, id: this.note.id });
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos
    },
    created() {
        if (this.note.style) {
            if (this.note.style.bgc) this.bgColor = this.note.style.bgc;
            if (this.note.style.color) this.color = this.note.style.color;
        }
    },
};