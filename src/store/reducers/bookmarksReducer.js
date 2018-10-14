
import { FETCH_BOOKMARKS, DELETE_BOOKMARK } from '../actions/types'

/**
 * Initial state of our application
 */
const initialState = {
    all: []
}

/**
 * Bookmarks reducer
 */
export function BookmarksReducer(state = initialState, { type, payload }) {
    switch(type) {
        /**
         * Here we want to get all the bookmarks in indexeddb
         */
        case FETCH_BOOKMARKS:
            return {
                ...state,
                all: payload
            }
        /**
         * Here we want to delete a bookmark
         */
        case DELETE_BOOKMARK:
            const bookmarks = state.all.filter(({ id }) => id !== payload.id)
            return {
                ...state,
                all: bookmarks
            }
        default:
            return state
    }
}