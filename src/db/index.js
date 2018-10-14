import Dexie from 'dexie'

const db = new Dexie('bm')

db.version(1).stores({
    bookmarks: '++id, description, link'
})

export default db