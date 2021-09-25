import config from '../utils/config';

const actionTypeSetUser = 'USER_SET_USER';
const actionTypeSetToken = 'USER_SET_TOKEN';
const initialState = {
  user: null,
  token: null,
};

/**
 * Reducer function for user
 * @param {Object} state - currentstate of notification
 * @param {Object} action - action for this reducer
 * @return {Object} - a new state
 */
function userReducer(state = initialState, action) {
  switch (action.type) {
  case actionTypeSetUser:
    return {
      ...state,
      user: action.data.user,
    };
  case actionTypeSetToken:
    return {
      ...state,
      token: action.data.token,
    };
  default:
    return state;
  }
}

/**
 * Set user by using token
 * @param {Object} user - user
 * @param {Object} token - token
 * @return {Function} - function for dispatch redux action
 */
export function setUserAndToken(user, token) {
  return async (dispatch) => {
    if (user) {
      window.localStorage.setItem(
        config.loggedRecipeAppUserKey,
        JSON.stringify(user),
      );
    } else {
      window.localStorage.removeItem(config.loggedRecipeAppUserKey);
    }

    dispatch({
      type: actionTypeSetUser,
      data: { user: user },
    });
    dispatch({
      type: actionTypeSetToken,
      data: { token: token },
    });
  };
}

/**
 * Set user by using token
 * @return {Function} - function for dispatch redux action
 */
export function initializeUserAndToken() {
  return async (dispatch) => {
    const loggedUserJSON =
      window.localStorage.getItem(config.loggedRecipeAppUserKey);

    const user = loggedUserJSON ? JSON.parse(loggedUserJSON) : null;
    const token = user ? user.token : null;
    dispatch({
      type: actionTypeSetUser,
      data: { user: user },
    });
    dispatch({
      type: actionTypeSetToken,
      data: { token: token },
    });
  };
};

export default userReducer;
