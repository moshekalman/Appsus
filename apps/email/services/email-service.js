const STORAGE_KEY = 'emailDB'
const gEmails = _createEmails();
import { storageService } from '../../../js/services/storage-service.js'

export const emailSercive = {
    getEmails
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
            readed: true,
            saved: true
        },
        {
            id: 333,
            sender: 'paolo',
            content: 'good morning!',
            dateAt: '10/04/2020',
            readed: false,
            saved: true
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