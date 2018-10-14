import { combineReducers } from 'redux'

import { BookmarksReducer } from './bookmarksReducer'
import { NotificationsReducer } from './notificationsReducer'

const rootReducer = combineReducers({
    bookmarks: BookmarksReducer,
    notifications: NotificationsReducer
})

export {
    rootReducer
}