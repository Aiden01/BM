import { ADD_ALERT, REMOVE_ALERT } from './types'

/**
 * Add a new alert to the state
 */
export const AddAlert = ({ type, message, time = 5000 }) => dispatch => {

    const alert = {
        type,
        message
    }

    dispatch({
        type: ADD_ALERT,
        payload: alert
    })

    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
            payload: alert
        })
    }, time)

}