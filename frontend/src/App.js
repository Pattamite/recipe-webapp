import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch, Route, Link, Redirect,
} from 'react-router-dom';

import {
  initializeUserAndToken,
} from './reducers/user_reducer';

import {
  setNotification,
  notificationTypeError,
  notificationTypeConfirm,
} from './reducers/notification_reducer';
import {
  setUserAndToken,
} from './reducers/user_reducer';

import Notification from './components/notification_component';
import LoginForm from './components/login_form_component';
import RegisterForm from './components/register_form_component';

/**
 * Main application of webapp.
 * @return {JSX} jsx of application
 */
function App() {
  const dispatch = useDispatch();
  // const notificationState = useSelector((state) => {
  //   return state.notification;
  // });
  const userState = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(initializeUserAndToken());
  }, []);

  /**
   * Handle logout request
   * @return {Boolean} login result
   */
  async function handleLogout() {
    console.log('logout');
    try {
      dispatch(setUserAndToken(null, null));
      setNotification(
        'Logout success. Goodbye.',
        notificationTypeConfirm,
      );
      return true;
    } catch (exception) {
      setNotification(
        'Logout failed. Please contact developer.',
        notificationTypeError,
      );
      return false;
    }
  }

  console.log(userState.user);

  return (
    <div className='container'>
      <Notification />
      <Switch>
        <Route path='/login'>
          {
            userState.user ?
              <Redirect to="/" /> :
              <LoginForm />
          }
        </Route>
        <Route path='/register'>
          {
            userState.user ?
              <Redirect to="/" /> :
              <RegisterForm />
          }
        </Route>
        <Route path='/'>
          <h1>Main Page</h1>
          {
            userState.user ?
              <div>
                <p>Hello {userState.user.displayName.toString()}</p>
                <br />
                <Link to='/' onClick={handleLogout}>Logout</Link>
              </div>:
              <div>
                <Link to='/login'>Please login</Link>
                <br />
                <Link to='/register'>or register</Link>
              </div>
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
