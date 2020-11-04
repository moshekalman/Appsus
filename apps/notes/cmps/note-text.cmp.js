export default {
    name: 'noteText',
    template: `
    <section>
        <textarea placeholder="Text here..." v-model="info.txt" class="note-text" contenteditable="true" aria-label="Take a note...">
        </textarea>
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