import { noteService } from '../services/note-services.js';
import editNote from './edit-note.cmp.js';
import savedNote from './saved-note.cmp.js';
import filterNotes from './filter-notes.cmp.js';
import { noteTypes } from './dynamicNote.cmp.js';
import addNote from './add-note.cmp.js';

export default {
    name: 'noteApp',
    template: `
    <section class="notes-container container flex column">
        <div class="add-note flex space-between align-center">
            <add-note v-if="currCmp" :cmp="currCmp" @onSaveNote="saveNote"></add-note>
            <div class="select-note-type flex space-bewteen align-center">
                <div :class="{selected: activeType === 0}" @click="changeNoteType(0)"><i class="type-icn fas fa-font"></i></div>
                <div :class="{selected: activeType === 1}" @click="changeNoteType(1)"><i class="type-icn far fa-image"></i></div>
                <div :class="{selected: activeType === 3}" @click="changeNoteType(3)"><i class="type-icn fab fa-youtube"></i></div>
                <div :class="{selected: activeType === 2}" @click="changeNoteType(2)"><i class="type-icn fas fa-list"></i></div>
            </div>
        </div>
        <filter-notes @filtered="onFilter" />
        <section v-if="notes" class="notes-box">
            <h2 v-if="notes.length" class="">Saved Notes</h2>
                <div class="notes-gallery flex align-center">
                    <saved-note @emitColorChange="onChangeColor" @emitBgcChange="onChangeBgColor" :note="note" 
                    @onDeleteEv="onDeleteNote" @onEditEv="onEditNote" @onTogglePin="togglePin"
                    v-for="note in notesToShow" :key="note.id"> </saved-note>
                </div>
        </section>
        <edit-note @onCloseModal="closeEditModal" v-if="currId" :noteId="currId"></edit-note>
    </section>
    `,
    data() {
        return {
            notes: null,
            currId: null,
            filterBy: null,
            noteTypes: noteTypes,
            currCmp: noteTypes.cmps[0],
            activeType: 0
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
        closeEditModal() {
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
        },
        changeNoteType(idx) {
            this.currCmp = noteTypes.cmps[idx];
            this.activeType = idx;
        },
        togglePin({ isPinned, id }) {
            console.log(isPinned, id)
            noteService.changePinnedStatus(isPinned, id);
        }
    },
    computed: {
        notesToShow() {
            if (!this.notes) return;
            if (!this.filterBy) return this.notes;
            return this.notes.filter(note => {
                if (note.type === 'noteText') return note.info.txt.toLowerCase().includes(this.filterBy);
                if (note.type === 'noteImg' || note.type === 'noteVid') return note.info.title.toLowerCase().includes(this.filterBy);
                if (note.type === 'noteTodos') return note.info.label.toLowerCase().includes(this.filterBy);
            });
        },
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