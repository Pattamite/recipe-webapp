import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import helper from '../utils/helper';

/**
 * Recipe list component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of recipe list component
 */
function RecipeList({ recipes }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {recipes.map((recipe, index) => {
        return (
          <Col key={`recipeCard${index}`}>
            <RecipeListItem recipe={recipe}/>
          </Col>
        );
      })}
    </Row>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

/**
 * Recipe list item component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of recipe list item  component
 */
function RecipeListItem({ recipe }) {
  return (
    <Card>
      <Card.Body>
        <Link to={`/recipe/${recipe.id}`}>
          <Card.Title>{recipe.name}</Card.Title>
        </Link>
        <Card.Subtitle className="mb-2 text-muted">
          By: {recipe.user.displayName}
        </Card.Subtitle>
        <Card.Text>
          {recipe.shortDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Difficulty: {helper.getDifficultyText(recipe.difficulty)}
        </ListGroupItem>
        <ListGroupItem>
          Estimated time: {recipe.estimatedMinutes} minutes
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

RecipeListItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeList;
