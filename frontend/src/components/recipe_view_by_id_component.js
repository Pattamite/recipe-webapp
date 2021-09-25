import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

import RecipeView from './recipe_view_component';

import {
  setNotification,
  notificationTypeError,
  notificationTypeConfirm,
} from '../reducers/notification_reducer';

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
  const dispatch = useDispatch();
  const history = useHistory();

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
   * Handle delete request
   * @param {String} recipeId - recipe id
   * @return {Boolean} register result
   */
  async function handleDelete(recipeId) {
    try {
      const userConfirm = confirm(
        `Are you sure to delete recipe "${recipe.name}"?`);
      if (!userConfirm) {
        return;
      }

      await recipesService.remove(recipeId, userState.token);
      dispatch(setNotification(
        `Recipe "${recipe.name}" deleted!`,
        notificationTypeConfirm,
      ));
      history.push('/');
      return true;
    } catch (exception) {
      dispatch(setNotification(
        `Failed to deleted recipe "${recipe.name}". ${exception.toString()}`,
        notificationTypeError,
      ));
      return false;
    }
  }

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
                <Link to={`/edit-recipe/${recipe.id}`}>
                  <div className="d-grid gap-2">
                    <Button variant='success'>
                      Edit
                    </Button>
                  </div>
                </Link>
              </Col>
              <Col sm={6} />
              <Col sm={3}>
                <div className="d-grid gap-2">
                  <Button
                    variant='danger'
                    onClick={handleDelete.bind(null, `${recipe.id}`)}
                  >
                    Delete
                  </Button>
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
