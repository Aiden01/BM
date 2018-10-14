import Dexie from 'dexie'


window.addEventListener('unhandledrejection', (ev) => {
    alert(`An error occurred: ${ev.reason}`)
}) 

const indexedDB = window.indexedDB || window.webkitIndexedDB || 
window.mozIndexedDB || window.msIndexedDB


if(!indexedDB) {
    indexedDBNotAvailable()
}

const db = new Dexie('bm', {
    indexedDB: indexedDB 
})

function indexedDBNotAvailable() {
    alert('Indexed DB is not supported by your browser. If you are running in incognito mode, please use the normal mode.')
}

db.version(1).stores({
    bookmarks: '++id, description, link'
})

export default db