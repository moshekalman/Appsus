
export default {
    props: ['cmp'],
    name: 'add-note',
    template: `
    <section class="new-note-container flex column">
        <form  v-if="cmp.type==='noteTodos'" class="add-todos" @submit.stop.prevent="addTodo">
                <input v-model="currTodo"  placeholder="Add Todo..." class="note-text">
                <button class="note-btn save-btn">Add</button>
        </form>
        <form @submit.prevent="emitNote">
            <input :placeholder="placeHolder" v-model="txt" class="note-text" required>
            <input v-if="cmp.type==='noteImg'"  placeholder="Enter Image Title..." v-model="title" class="note-text" required>
            <input v-if="cmp.type==='noteVid'"  placeholder="Enter Video Title..." v-model="title" class="note-text" required>
            <input v-if="cmp.type==='noteAudio'"  placeholder="Enter Audio Title..." v-model="title" class="note-text" required>
            <button class="note-btn save-btn">Save</button>
        </form>

            <div class="todo-prev">
                 <ul>
                    <li v-for="todo in todos">{{todo.txt}}</li>
                </ul>
            </div>
    </section>
`,
    data() {
        return {
            txt: '',
            title: '',
            todos: [],
            currTodo: '',
            placeHolder: '',

        };
    },
    methods: {
        emitNote() {
            if (this.txt === '') return;
            else if (this.cmp.type === 'noteText') this.cmp.info.txt = this.txt;
            else if (this.cmp.type === 'noteTodos') {
                if (!this.todos.length) return;
                this.cmp.info.label = this.txt;
                this.cmp.info.todos = this.todos;
                this.todos = [];
                this.currTodo = '';
            }
            else {
                this.cmp.info.url = this.txt;
                this.cmp.info.title = this.title;
                this.title = '';
            }
            this.$emit('onSaveNote', JSON.parse(JSON.stringify(this.cmp)));
            this.txt = '';

        },
        addTodo() {
            if (this.currTodo === '') return;
            this.todos.push({ txt: this.currTodo, doneAt: null });
            this.currTodo = '';
        },
    },
    watch: {
        'cmp'(to, from) {
            if (this.cmp.type === 'noteText') this.placeHolder = "Enter Text...";
            else if (this.cmp.type === 'noteImg') this.placeHolder = "Enter Img Url...";
            else if (this.cmp.type === 'noteTodos') this.placeHolder = "Enter Label For Your Todos...";
            else if (this.cmp.type === 'noteVid') this.placeHolder = "Enter Video Url...";
            else if (this.cmp.type === 'noteAudio') this.placeHolder = "Enter Audio Url...";
        }
    },
    created() {
        console.log(this.cmp);
        if (this.cmp.type === 'noteText') this.placeHolder = "Enter Text...";
        else if (this.cmp.type === 'noteImg') this.placeHolder = "Enter Image Url...";
        else if (this.cmp.type === 'noteTodos') this.placeHolder = "Enter Label For Your Todos...";
        else if (this.cmp.type === 'noteVid') this.placeHolder = "Enter Video Url...";
        else if (this.cmp.type === 'noteAudio') this.placeHolder = "Enter Audio Url...";
    },
};