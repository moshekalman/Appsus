import { noteService } from '../services/note-services.js';

export default {
    name: 'edit-note',
    props: ['noteId'],
    template: `
    <section class="edit-modal flex just-center align-center" v-if="note">
        <div class="edit-content flex column">
            <div class="close-btn" @click="emitCloseModal"><i class="far fa-times-circle"></i></div>
            <input placeholder="Text here..." v-model="note.info.txt" class="note-text" contenteditable="true">
            <button class='note-btn' @click="emitEdit">Edit!</button>
        </div>
    </section>
    
    `,
    data() {
        return {
            note: null
        };
    },
    methods: {
        emitEdit() {
            this.$emit('onCloseModal');
            noteService.editNoteById(this.noteId, this.note);
        },
        emitCloseModal() {
            this.note = null;
            this.$emit('onCloseModal');
        },

    },
    created() {
        noteService.getNoteById(this.noteId)
            .then(res => this.note = JSON.parse(JSON.stringify(res)));
    },
};