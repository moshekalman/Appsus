
import { storageService } from '../../../js/services/storage-service.js';

export const noteService = {
    getNotes,
    addNote,
    deleteNote,
    getNoteById,
    editNoteById,
    changeBgColor,
    changeColor,
    editTodoById,
    changePinnedStatus
};

const NOTES_KEY = 'notesDB';
var gNotes = _getNotes();

function _getNotes() {
    if (storageService.loadFromLocalStorage(NOTES_KEY)) return storageService.loadFromLocalStorage(NOTES_KEY);
    else return [
        {
            type: "noteText",
            id: _makeId(),
            isPinned: false,
            info: {
                txt: 'Nadavs new phone: 054-222-3353'
            },
            style: {
                bgc: '#F79E2E',
                color: '#0074E1'
            }
        },
        {
            type: "noteImg",
            id: _makeId(),
            isPinned: false,
            info: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGQwdOZQsFiWRozjKrWHU_qwevJAzvgYIPeQ&usqp=CAU',
                title: 'Fluffy was hot yesterday!'
            },
            style: {
                bgc: '#a93',
                color: '#fff'
            }
        },
        {
            type: "noteTodos",
            id: _makeId(),
            isPinned: true,
            info: {
                label: 'Yahavs Birthday Party',
                todos: [
                    { txt: 'Buy a cake', doneAt: 1604769371724 },
                    { txt: 'Buy candeles', doneAt: 1604549371724 },
                    { txt: 'Order catering', doneAt: '' },
                    { txt: 'make the cookies', doneAt: '' },
                ]
            },
            style: {
                bgc: '#eee',
                color: '#31f'
            }
        },
        {
            type: "noteVid",
            id: _makeId(),
            isPinned: false,
            info: {
                url: 'https://www.youtube.com/watch?v=qQzdAsjWGPg',
                title: 'Add To Classic Playlist!'
            },
            style: {
                bgc: '#eeb',
                color: '#f4f'
            }
        },

    ];
}

function getNotes() {
    return Promise.resolve(gNotes);
}

function addNote(note) {
    note.id = _makeId();
    gNotes.push(note);
    storageService.saveToLocalStorage(NOTES_KEY, gNotes);
}

function deleteNote(id) {
    const noteIdx = gNotes.findIndex(note => note.id === id);
    console.log(noteIdx);
    if (noteIdx === -1) return;
    gNotes.splice(noteIdx, 1);
    storageService.saveToLocalStorage(NOTES_KEY, gNotes);
}


function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getNoteById(id) {
    return Promise.resolve(gNotes.find(note => note.id === id));
}

function editNoteById(id, { info }) {
    getNoteById(id)
        .then(res => {
            res.info = info;
            storageService.saveToLocalStorage(NOTES_KEY, gNotes);
        });
}

function changeBgColor({ bgc, id }) {
    getNoteById(id)
        .then(res => {
            (res.style) ? res.style.bgc = bgc : res.style = { bgc };
            storageService.saveToLocalStorage(NOTES_KEY, gNotes);
        });
}

function changeColor({ color, id }) {
    getNoteById(id)
        .then(res => {
            (res.style) ? res.style.color = color : res.style = { color };
            storageService.saveToLocalStorage(NOTES_KEY, gNotes);
        });
}

function editTodoById(id, info) {
    getNoteById(id)
        .then(res => {
            res.info = info;
            storageService.saveToLocalStorage(NOTES_KEY, gNotes);
        });
}

function changePinnedStatus(isPinned, id) {
    getNoteById(id)
        .then(res => {
            res.isPinned = isPinned;
            storageService.saveToLocalStorage(NOTES_KEY, gNotes);
        });
}
