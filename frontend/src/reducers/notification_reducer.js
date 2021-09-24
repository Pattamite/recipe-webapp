const actionTypeSetType = 'NOTIFICATION_SET_TYPE';
const actionTypeMessage = 'NOTIFICATION_MESSAGE';
const actionTypeHide = 'NOTIFICATION_HIDE';

export const notificationTypeError = 'danger';
export const notificationTypeConfirm = 'success';
export const notificationTypeHide = 'TYPE_HIDE';

let currentTimeoutId = null;

const initialState = {
  type: notificationTypeHide,
  message: '',
};

/**
 * Reducer function for notification
 * @param {Object} state - currentstate of notification
 * @param {Object} action - action for this reducer
 * @return {Object} - a new state
 */
function notificationReducer(state = initialState, action) {
  switch (action.type) {
  case actionTypeSetType:
    return {
      ...state,
      type: action.data.type,
    };
  case actionTypeMessage:
    return {
      ...state,
      message: action.data.message,
    };
  case actionTypeHide:
    return {
      ...state,
      message: '',
      type: notificationTypeHide,
    };
  default:
    return state;
  }
}

/**
 * Set notification
 * @param {String} message - notification message
 * @param {String} type - notification type
 * @param {Int} timeout - time (in millisecond) until hiding notification
 * @return {Function} - function for dispatch redux action
 */
export function setNotification(
  message,
  type = notificationTypeConfirm,
  timeout = 10000) {
  return async (dispatch) => {
    clearTimeout(currentTimeoutId);

    dispatch({
      type: actionTypeSetType,
      data: { type: type },
    });
    dispatch({
      type: actionTypeMessage,
      data: { message: message },
    });

    currentTimeoutId = await setTimeout(() => {
      dispatch({
        type: actionTypeSetType,
        data: { type: notificationTypeHide },
      });
    }, timeout);
  };
}

export default notificationReducer;
