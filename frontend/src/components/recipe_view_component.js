import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import helper from '../utils/helper';

/**
 * Recipe view form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of recipe view  component
 */
function RecipeView({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <br/>
      <h4>By: {recipe.user.displayName}</h4>
      <h5>Difficulty: {helper.getDifficultyText(recipe.difficulty)}</h5>
      <h5>Estimated time: {recipe.estimatedMinutes} minutes</h5>
      <br/>
      <p>{recipe.description}</p>
      <br/>
      <h3>Ingredients</h3>
      <Table striped bordered hover>
        <tbody>
          {recipe.ingredients.map( (ingredient, index) => {
            return (
              <tr key={`ingredient${index}`}>
                <td>{ingredient.name}</td>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.unit}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br/>
      <h3>Steps</h3>
      {recipe.steps.map( (step, index) => {
        return (
          <div key={`ingredient${index}`}>
            <h4>{`Step ${index + 1}`}</h4>
            <p>{step.description}</p>
            { step.tip ? <p>Tips: {step.tip}</p> : ''}
            { step.warning ? <p>Warning: {step.warning}</p> : ''}
          </div>
        );
      })}
    </div>
  );
}

RecipeView.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeView;
