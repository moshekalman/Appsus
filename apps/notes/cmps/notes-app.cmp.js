import { noteService } from '../services/note-services.js';
import editNote from './edit-note.cmp.js';

export default {
    name: 'noteApp',
    template: `
    <section class="notes-container container flex column">
        <div class="add-note flex column">
            <router-view @onSaveNote="saveNote"></router-view>
        </div>
        <section v-if="notes" class="notes-box">
            <h2 v-if="notes.length" class="">Saved Notes</h2>
            <div class="notes-container flex align-center">
                <div class="saved-note flex column align-center" v-for="note in notes" :key="note.id">
                    <div class="saved-text">
                        {{note.info.txt}}
                    </div>
                    <div class="edit-btns flex space-between align-center">
                        <img @click="onDeleteNote(note.id)" src="./assets/svgs/trash-solid.svg" class="edit-btn">
                        <img @click="onEditNote(note.id)" src="./apps/notes/assets/svgs/edit-solid.svg" class="edit-btn">
                    </div>
                </div>
            </div>
        </section>
<edit-note></edit-note>
    </section>
    `,
    data() {
        return {
            notes: null,
        };
    },
    methods: {
        saveNote(newNote) {
            noteService.addNote(newNote);
        },
        onDeleteNote(noteId) {
            noteService.deleteNote(noteId);
        }
    },
    components: {
        editNote
    },
    created() {
        noteService.getNotes()
            .then(res => this.notes = res);
    },
};