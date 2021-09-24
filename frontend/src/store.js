import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import notificationReducer from './reducers/notification_reducer';
import userReducer from './reducers/user_reducer';

const reducer = combineReducers({
  notification: notificationReducer,
  user: userReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
