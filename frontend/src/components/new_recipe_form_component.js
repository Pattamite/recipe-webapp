import React from 'react';
import { useSelector } from 'react-redux';

import RecipeForm from './recipe_form_component';

import recipesService from '../services/recipes_service';

/**
 * New recipe form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of new recipe form component
 */
function NewRecipeForm(props) {
  const userState = useSelector((state) => {
    return state.user;
  });

  /**
   * Handle submit request
   * @param {Object} recipe - recipe
   * @return {Boolean} register result
   */
  async function handleSubmit(recipe) {
    console.log('submit request', recipe);
    const response = recipesService.create(recipe, userState.token);
    console.log('submit result', response.body);
    return true;
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
