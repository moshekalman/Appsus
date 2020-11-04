export default {
    name: 'noteText',
    template: `
    <section>
        <input placeholder="Text here..." v-model="info.txt" class="note-text" contenteditable="true">
    </section>
`,
    data() {
        return {
            type: "NoteText",
            isPinned: false,
            info: {
                txt: ''
            }
        };
    },
}