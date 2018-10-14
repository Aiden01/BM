import { FETCH_BOOKMARKS, DELETE_BOOKMARK } from './types'
import db from '../../db'

/**
 * Fetches all the current bookmarks in indexeddb
 */
export const fetchBookmarks = (limit = 15) => async dispatch => {
    // get the data
    const bookmarks = await db.bookmarks
        .limit(limit)
        .desc()
        .toArray()
    
    // dispatch to the reducer
    dispatch({
        type: FETCH_BOOKMARKS,
        payload: bookmarks
    })
    
}

/**
 * Delete a bookmark
 */
export const deleteBookmark = (id) => async dispatch => {
    await db.bookmarks
        .where({ id })
        .delete()

    dispatch({
        type: DELETE_BOOKMARK,
        payload: id 
    })
} 

export const searchBookmark = (query) => async (dispatch) => {
    // get the data
    const bookmarks = await db.bookmarks
        .toArray()

    const payload = query === '' ? bookmarks : bookmarks.filter(({ title, description }) => title.toLowerCase().includes(query.toLowerCase()) || description.toLowerCase().includes(query.toLowerCase()))
    dispatch({
        type: FETCH_BOOKMARKS,
        payload
    })
}