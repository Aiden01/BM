import { REMOVE_ALERT, ADD_ALERT } from '../actions/types'

/**
 * Initial state of the notifications
 */
const initialState = {
    alerts: []
}

/**
 * Notifications reducer
 * @export
 * @param {Object} [state=initialState]
 * @param {Object} { type, payload }
 */
export function NotificationsReducer(state = initialState, { type, payload }) {
    switch(type) {
    /**
         * We want to add a new alert to the state
         */
    case ADD_ALERT:
        return {
            ...state,
            alerts: state.alerts.concat(payload)
        }
        /**
         * We want to remove an alert to our state
         */
    case REMOVE_ALERT:
        return {
            ...state,
            alerts: state.alerts.filter(alert => alert !== payload)
        }
    default:
        return state
    }
}
