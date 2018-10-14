import { combineReducers } from 'redux'

import { BookmarksReducer } from './bookmarksReducer'

const rootReducer = combineReducers({
    bookmarks: BookmarksReducer
})

export {
    rootReducer
}