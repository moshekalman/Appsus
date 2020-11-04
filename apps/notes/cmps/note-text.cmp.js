

export default {
    name: 'noteText',
    template: `
    <section>
        <input @blur="emitNote" placeholder="Text here..." v-model="note.info.txt" class="note-text" contenteditable="true">
        <button @click="emitNote">Save Note!</button>
    </section>
`,
    data() {
        return {
            note: {
                type: "NoteText",
                isPinned: false,
                info: {
                    txt: ''
                }
            }
        };
    },
    methods: {
        emitNote() {
            if (this.note.info.txt === '') return;
            this.$emit('onSaveNote', JSON.parse(JSON.stringify(this.note)));
            this.note.info.txt = '';
        }
    },
};