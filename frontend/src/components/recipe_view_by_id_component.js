import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

import RecipeView from './recipe_view_component';

import recipesService from '../services/recipes_service';

/**
 * Recipe view form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of recipe view  component
 */
function RecipeViewById(props) {
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

  return (
    <div>
      { isLoading ?
        <p>Loading...</p> :
        <div>
          <RecipeView recipe={recipe} />
          <br/>
          { allowToEdit ?
            <Row>
              <Col sm={3}>
                <div className="d-grid gap-2">
                  <Link to={`/edit-recipe/${recipe.id}`}>
                    <Button variant='success'>
                      Edit
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col sm={6} />
              <Col sm={3}>
                <div className="d-grid gap-2">
                  <Link to={`/delete-recipe/${recipe.id}`}>
                    <Button variant='danger'>
                      Delete
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>:
            ''
          }
        </div>
      }
    </div>
  );
}

export default RecipeViewById;
