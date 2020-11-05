

export default {
    props: ['info'],
    name: 'todo-note',
    template: `
    <section class="todo-container">
        <h4 class="img-title todo-label">
        {{info.label}}
        </h4>
        <ul class="clean-list">
            <li v-for="(todo, index) in info.todos">
                <label class="flex space-between">
                    <h5 :class="{done: todo.doneAt}">{{todo.txt}}</h5>
                    <h5 v-if="todo.doneAt">{{currDate(todo.doneAt)}}</h5>
                    <input hidden @input="onToggleTodo(index)" class="clickable" type="checkbox">
                </label>
            </li>

        </ul>
        <img class="note-img" v-if="info.url" :src="info.url">
    </section>
    `,
    methods: {
        onToggleTodo(idx) {
            if (!this.info.todos[idx].doneAt) this.info.todos[idx].doneAt = Date.now();
            else this.info.todos[idx].doneAt = null;
            console.log(this.info.todos[idx].doneAt)
        },
        currDate(dateInMs){
            return new Date(dateInMs).toLocaleString()
        }
    },
}