import { storageService } from '../../../js/services/storage-service.js';
import { noteService } from '../services/note-services.js';

export default {
    name: 'edit-note',
    props: ['noteId'],
    template: `
    <section class="edit-modal flex just-center align-center" v-if="note">
        <div class="edit-content flex column">
            <input @blur="emitEdit" placeholder="Text here..." v-model="note.info.txt" class="note-text" contenteditable="true">
            <button @click="emitEdit">Edit!</button>
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
            this.$emit('onEdit');
            noteService.editNoteById(this.noteId, this.note);
        },

    },
    created() {
        noteService.getNoteById(this.noteId)
            .then(res => this.note = JSON.parse(JSON.stringify(res)));
    },
};