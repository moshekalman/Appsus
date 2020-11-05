const STORAGE_KEY = 'emailDB'
const gEmails = _createEmails();
import { storageService } from '../../../js/services/storage-service.js'

export const emailService = {
    getEmails,
    remove,
    getById,
    addToSaved
}

function _createEmails() {
    if (storageService.loadFromLocalStorage(STORAGE_KEY)) {
        return storageService.loadFromLocalStorage(STORAGE_KEY);
    }
    const emails = [{
            id: 111,
            sender: 'nadav',
            content: 'hello world',
            dateAt: '15:12',
            readed: false,
            saved: false
        },
        {
            id: 222,
            sender: 'moshe',
            content: 'bye-bye',
            dateAt: '12:50',
            readed: false,
            saved: false
        },
        {
            id: 333,
            sender: 'paolo',
            content: 'good morning!',
            dateAt: '10/04/2020',
            readed: false,
            saved: false
        }
    ]
    storageService.saveToLocalStorage(STORAGE_KEY, emails)
    return emails;

}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getEmails() {
    return Promise.resolve(gEmails);
}

function remove(emailId) {
    const idx = _getIdxById(emailId);
    gEmails.splice(idx, 1)
    storageService.saveToLocalStorage(STORAGE_KEY, gEmails)
}

function _getIdxById(id) {
    return gEmails.findIndex(email => email.id === id)
}

function getById(id) {
    console.log(id);
    console.log(gEmails);
    const email = gEmails.find(currEmail => currEmail.id === +id)
    console.log(email);
    return Promise.resolve(email)
}

function addToSaved(currEmail) {
    console.log(currEmail);
    const idx = gEmails.findIndex((email) => email.id === currEmail.id)
    console.log(idx)
    console.log(gEmails[idx]);
    gEmails[idx].saved = !gEmails[idx].saved
    console.log(gEmails[idx].saved);
    console.log(gEmails);
    storageService.saveToLocalStorage(STORAGE_KEY, gEmails)

}