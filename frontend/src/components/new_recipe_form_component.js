import React from 'react';

import RecipeForm from './recipe_form_component';

/**
 * New recipe form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of new recipe form component
 */
function NewRecipeForm(props) {
  /**
   * Handle submit request
   * @param {Object} recipe - recipe
   * @return {Boolean} register result
   */
  async function handleSubmit(recipe) {
    console.log(recipe);
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
