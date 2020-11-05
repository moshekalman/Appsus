export default {
    props: ['info'],
    name: 'text-note',
    template: `
    <section>
        <h4 class="img-title">
        {{info.label}}
        </h4>
        <ul>
            <li v-for="(todo, index) in info.todos">
                <label class="flex space-between">
                    <h5 :class="{done: todo.doneAt}">{{todo.txt}}</h5>
                    <h6 v-if="todo.doneAt">{{currDate(todo.doneAt)}}</h6>
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
        }
    },
    computed: {
        currDate(dateInMs){
            // return new Date.customFormat("#DD#/#MM# #hh#:#mm#")
        }
    },
}