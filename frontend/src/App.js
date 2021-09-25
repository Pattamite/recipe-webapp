import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import {
  initializeUserAndToken,
} from './reducers/user_reducer';

import Notification from './components/notification_component';
import NavBar from './components/navbar_component';
import LoginForm from './components/login_form_component';
import RegisterForm from './components/register_form_component';
import NewRecipeForm from './components/new_recipe_form_component';

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

  return (
    <div className='container'>
      <NavBar />
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
        <Route path='/recipes'>
          <p>Recipes page</p>
        </Route>
        <Route path='/yourrecipes'>
          {
            userState.user ?
              <div>
                <p>
                  {userState.user.displayName.toString()}{'\''}s recipes page.
                </p>
              </div>:
              <Redirect to="/login" />
          }
        </Route>
        <Route path='/newrecipe'>
          {
            userState.user ?
              <div>
                <NewRecipeForm />
              </div>:
              <Redirect to="/login" />
          }
        </Route>
        <Route path='/'>
          <h1>Main Page</h1>
          {
            userState.user ?
              <div>
                <p>Hello, {userState.user.displayName.toString()}.</p>
              </div>:
              <div>
                <p>Welcome to recipes website.</p>
              </div>
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
