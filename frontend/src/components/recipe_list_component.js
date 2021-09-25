import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
  /**
   * Get difficulty text
   * @param {Int} difficulty - component arguments
   * @return {String} difficulty text
   */
  function getDifficultyText(difficulty) {
    switch (difficulty) {
    case 1:
      return 'Very easy';
    case 2:
      return 'Easy';
    case 3:
      return 'Medium';
    case 4:
      return 'Hard';
    case 5:
      return 'Very hard';
    default:
      return 'Not specified';
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By: {recipe.user.displayName}
        </Card.Subtitle>
        <Card.Text>
          {recipe.shortDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Difficulty: {getDifficultyText(recipe.difficulty)}
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
