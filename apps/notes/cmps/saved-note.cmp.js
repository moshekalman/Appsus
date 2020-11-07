import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVid from './note-video.cmp.js';

export default {
    props: ['note'],
    name: 'saved-note',
    template: `
    <section :class="[isText ? textClass : frameClass,{pinned: note.isPinned}]" class="flex column align-center" :style="{backgroundColor:bgColor, color}">
    <div class="pin" @click="emmitTogglePin(note.id)" :class="{solid: note.isPinned}">
    <i class="fas fa-thumbtack"></i>
    </div>
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
            color: null,
            isText: true,
            textClass: 'saved-note',
            frameClass: 'saved-frame',
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
        },
        emmitTogglePin(id){
            this.note.isPinned = !this.note.isPinned
            this.$emit('onTogglePin', {isPinned:this.note.isPinned, id});
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteVid
    },
    created() {
        console.log(this.note.isPinned)
        if (this.note.style) {
            if (this.note.style.bgc) this.bgColor = this.note.style.bgc;
            if (this.note.style.color) this.color = this.note.style.color;
        }
        if (this.note.type === 'noteImg' || this.note.type === 'noteVid') this.isText = false;
    },
};