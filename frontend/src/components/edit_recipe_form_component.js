import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
function EditRecipeForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector((state) => {
    return state.user;
  });

  const recipeId = useParams().id;
  const [recipe, setRecipe] = useState(null);
  const [allowToEdit, setAllowToEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setIsLoading(true);

    const recipeResult =
      await recipesService.getRecipeById(recipeId);
    setRecipe(recipeResult);
    setAllowToEdit(!!(userState.user &&
      userState.user.id === recipeResult.user.id));

    setIsLoading(false);
  }, [recipeId, userState]);

  /**
   * Handle submit request
   * @param {Object} recipe - recipe
   * @return {Boolean} register result
   */
  async function handleSubmit(recipe) {
    try {
      await recipesService.update(recipeId, recipe, userState.token);
      dispatch(setNotification(
        `Recipe "${recipe.name}" updated!`,
        notificationTypeConfirm,
      ));
      history.push('/');
      return true;
    } catch (exception) {
      dispatch(setNotification(
        `Failed to updated recipe "${recipe.name}". ${exception.toString()}`,
        notificationTypeError,
      ));
      return false;
    }
  }

  return (
    <div>
      { isLoading ?
        <p>Loading...</p> :
        allowToEdit ?
          <div>
            <h2>Edit Recipe</h2>
            <RecipeForm
              handleSubmit={handleSubmit}
              recipe={recipe}
            />
          </div>:
          <p>Error: Permission Denied</p>
      }
    </div>
  );
}

export default EditRecipeForm;
