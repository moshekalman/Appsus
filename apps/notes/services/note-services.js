
import { storageService } from '../../../js/services/storage-service.js';

export const noteService = {
    getNotes,
    addNote,
    deleteNote,
    getNoteById,
    editNoteById,
    changeBgColor,
    changeColor,
    editTodoById
};

const NOTES_KEY = 'notesDB';
var gNotes = _getNotes();

function _getNotes() {
    if (storageService.loadFromLocalStorage(NOTES_KEY)) return storageService.loadFromLocalStorage(NOTES_KEY);
    else return [];
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

