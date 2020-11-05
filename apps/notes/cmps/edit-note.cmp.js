import { noteService } from '../services/note-services.js';

export default {
    name: 'edit-note',
    props: ['noteId'],
    template: `
    <section class="edit-modal flex just-center align-center" v-if="note">
        <div class="edit-content flex column">
            <div class="close-btn" @click="emitCloseModal"><i class="far fa-times-circle"></i></div>
            <div v-if="note.type === 'noteText'">
                <h3>Text:</h3>
                <form @submit.prevent="emitEdit">
                    <input placeholder="Text here..." v-model="note.info.txt" class="note-text" required>
                </form>
            </div>
            <div v-if="note.type === 'noteImg'">
            <form @submit.prevent="emitEdit">
                <h4>URL:</h4 >
                <input placeholder="Url Here..." v-model="note.info.url" class="note-text" required>
                <h3>Title:</h3>
                <input placeholder="Title Here..." v-model="note.info.title" class="note-text title" required>
            </form>       
            </div>
            <div v-if="note.type === 'noteTodos'">
            <form @submit.prevent="emitEdit">
                <h3>Label:</h3> 
                <input  placeholder="Label Here..." v-model="note.info.label" class="note-text title" required>
                <h4>Todos: </h4>
                <input v-for="(todo, index) in note.info.todos" :key="index"  :placeholder="'Todo' + (index+1)" v-model="todo.txt" class="note-text" required>
            </form>  
            </div>
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