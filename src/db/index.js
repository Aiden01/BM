import Dexie from 'dexie'

const db = new Dexie('bm')

window.addEventListener('unhandledrejection', (ev) => {
    alert(`An error occurred: ${ev.reason}`)
}) 



if(!window.indexedDB) {
    indexedDBNotAvailable()
}

function indexedDBNotAvailable() {
    alert('Indexed DB is not supported by your browser. If you are running in incognito mode, please use the normal mode.')
}

db.version(1).stores({
    bookmarks: '++id, description, link'
})

export default db