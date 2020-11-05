const STORAGE_KEY_INBOX = 'inboxDB'
const STORAGE_KEY_SENT = 'sentDB'
const gEmails = _createEmails();
const gSentEmails = _getSentEmails();
import { storageService } from '../../../js/services/storage-service.js'

export const emailService = {
    getEmails,
    remove,
    getById,
    addToSaved,
    sendEmail
}

function _createEmails() {
    if (storageService.loadFromLocalStorage(STORAGE_KEY_INBOX)) {
        return storageService.loadFromLocalStorage(STORAGE_KEY_INBOX);
    }
    const emails = [{
            id: 111,
            sender: 'nadav',
            addressee: 'me',
            content: 'hello world',
            dateAt: '15:12',
            readed: false,
            saved: false,
            sent: false
        },
        {
            id: 222,
            sender: 'moshe',
            addressee: 'me',
            content: 'bye-bye',
            dateAt: '12:50',
            readed: false,
            saved: false,
            sent: false

        },
        {
            id: 333,
            sender: 'paolo',
            addressee: 'me',
            content: 'good morning!',
            dateAt: '10/04/2020',
            readed: false,
            saved: false,
            sent: false
        }
    ]
    storageService.saveToLocalStorage(STORAGE_KEY_INBOX, emails)
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
    storageService.saveToLocalStorage(STORAGE_KEY_INBOX, gEmails)
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
    storageService.saveToLocalStorage(STORAGE_KEY_INBOX, gEmails)

}

// function _getEmptyEmailSent() {
//     return { sender: null, addressee: null, content: null }
// }

function _getSentEmails() {
    if (storageService.loadFromLocalStorage(STORAGE_KEY_SENT)) {
        return storageService.loadFromLocalStorage(STORAGE_KEY_SENT);
    }
    const emailSent = []
    return []
}

function sendEmail(email) {
    var addedEmail = email
    addedEmail.id = _makeId()
    gEmails.push(addedEmail)
    storageService.saveToLocalStorage(STORAGE_KEY_INBOX, gEmails)
}