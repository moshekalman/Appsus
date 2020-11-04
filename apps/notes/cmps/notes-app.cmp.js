import { noteService } from '../services/note-services.js';
import editNote from './edit-note.cmp.js';
import savedNote from './saved-note.cmp.js';

export default {
    name: 'noteApp',
    template: `
    <section class="notes-container container flex column">
        <div class="add-note flex column">
            <router-view @onSaveNote="saveNote"></router-view>
        </div>
        <section v-if="notes" class="notes-box">
            <h2 v-if="notes.length" class="">Saved Notes</h2>
                <div class="notes-container flex align-center" >
                    <saved-note @emitColorChange="onChangeColor" @emitBgcChange="onChangeBgColor" :note="note" 
                    @onDeleteEv="onDeleteNote" @onEditEv="onEditNote" 
                    v-for="note in notes" :key="note.id"> </saved-note>
                </div>
        </section>
        <edit-note @onEdit="closeEdit" v-if="currId" :noteId="currId"></edit-note>
    </section>
    `,
    data() {
        return {
            notes: null,
            currId: null
        };
    },
    methods: {
        saveNote(newNote) {
            noteService.addNote(newNote);
        },
        onDeleteNote(noteId) {
            noteService.deleteNote(noteId);
        },
        onEditNote(noteId) {
            this.currId = noteId;
        },
        closeEdit() {
            this.currId = null;
        },
        onChangeBgColor(bgcNoteObj){
            noteService.changeBgColor(bgcNoteObj)
        },
        onChangeColor(colorNoteObj){
            noteService.changeColor(colorNoteObj)
        }
    },
    components: {
        editNote,
        savedNote
    },
    created() {
        noteService.getNotes()
            .then(res => this.notes = res);
    },
};