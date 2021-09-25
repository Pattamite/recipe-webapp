import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RecipeForm from './recipe_form_component';

import recipesService from '../services/recipes_service';

import {
  setNotification,
  notificationTypeError,
  notificationTypeConfirm,
} from '../reducers/notification_reducer';
/**
 * New recipe form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of new recipe form component
 */
function NewRecipeForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector((state) => {
    return state.user;
  });

  /**
   * Handle submit request
   * @param {Object} recipe - recipe
   * @return {Boolean} register result
   */
  async function handleSubmit(recipe) {
    try {
      await recipesService.create(recipe, userState.token);
      dispatch(setNotification(
        `Recipe "${recipe.name}" created!`,
        notificationTypeConfirm,
      ));
      history.push('/');
      return true;
    } catch (exception) {
      dispatch(setNotification(
        `Failed to create recipe "${recipe.name}". ${exception.toString()}`,
        notificationTypeError,
      ));
      return false;
    }
  }

  return (
    <div>
      <h2>New Recipe</h2>
      <RecipeForm
        handleSubmit={handleSubmit}
        recipe={false}
      />
    </div>
  );
}

export default NewRecipeForm;
