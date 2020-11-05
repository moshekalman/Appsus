import { noteService } from '../services/note-services.js';
import editNote from './edit-note.cmp.js';
import savedNote from './saved-note.cmp.js';
import filterNotes from './filter-notes.cmp.js';
import {noteTypes} from './dynamicNote.cmp.js'
import addNote from './add-note.cmp.js';

export default {
    name: 'noteApp',
    template: `
    <section class="notes-container container flex column">
        <div class="add-note flex space-between align-center">
            <add-note v-if="currCmp" :cmp="currCmp" @onSaveNote="saveNote"></add-note>
            <div class="select-note-type flex space-bewteen">
                <div><i :class="{selected: currCmp === 'noteText'}" class="type-icn fas fa-font"></i></div>
                <div><i :class="{selected: currCmp === 'noteImg'}" class="type-icn far fa-image"></i></div>
                <div><i :class="{selected: currCmp === 'noteTodos'}" class="type-icn fas fa-list"></i></div>
            </div>
        </div>
        <filter-notes @filtered="onFilter" />
        <section v-if="notes" class="notes-box">
            <h2 v-if="notes.length" class="">Saved Notes</h2>
                <div class="notes-container flex align-center" >
                    <saved-note @emitColorChange="onChangeColor" @emitBgcChange="onChangeBgColor" :note="note" 
                    @onDeleteEv="onDeleteNote" @onEditEv="onEditNote" 
                    v-for="note in notesToShow" :key="note.id"> </saved-note>
                </div>
        </section>
        <edit-note @onEdit="closeEdit" v-if="currId" :noteId="currId"></edit-note>
    </section>
    `,
    data() {
        return {
            notes: null,
            currId: null,
            filterBy: null,
            noteTypes: noteTypes,
            currCmp: noteTypes.cmps[2]
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
        onChangeBgColor(bgcNoteObj) {
            noteService.changeBgColor(bgcNoteObj);
        },
        onChangeColor(colorNoteObj) {
            noteService.changeColor(colorNoteObj);
        },
        onFilter(filter) {
            this.filterBy = filter;
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            return this.notes.filter(note => note.info.txt.toLowerCase().includes(this.filterBy))
        }
    },
    components: {
        editNote,
        savedNote,
        filterNotes,
        addNote
    },
    created() {
        noteService.getNotes()
            .then(res => this.notes = res);
    },
};