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
import LastestRecipesPage from './components/lastest_recipes_page_component';
import RecipeViewById from './components/recipe_view_by_id_component';

/**
 * Main application of webapp.
 * @return {JSX} jsx of application
 */
function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => {
    return state.user;
  });

  useEffect(async () => {
    await dispatch(initializeUserAndToken());
  }, [dispatch]);

  return (
    <div className='container'>
      <NavBar />
      <Notification />
      <Switch>
        <Route path='/lastest-recipe/:page_number'>
          <LastestRecipesPage />
        </Route>
        <Route path='/recipe/:id'>
          <RecipeViewById />
        </Route>
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
        <Route path='/your-recipes'>
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
        <Route path='/new-recipe'>
          {
            userState.user ?
              <NewRecipeForm />:
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
