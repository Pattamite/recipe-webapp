import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';

import useField from '../hooks/use_field';
import helper from '../utils/helper';

const ingredientFieldName = 'ingredientFieldName';
const ingredientFieldQuantity = 'ingredientFieldQuantity';
const ingredientFieldUnit = 'ingredientFieldUnit';
const ingredientFieldImagePath = 'ingredientFieldImagePath';

const stepFieldDescription = 'stepFieldDescription';
const stepFieldWarning = 'stepFieldWarning';
const stepFieldTip = 'stepFieldTip';
const stepFieldImagePath = 'stepFieldImagePath';

const initialIngredient = {
  name: '',
  quantity: 0,
  unit: '',
  imagePath: '',
};
const initialStep = {
  description: '',
  warning: '',
  tip: '',
  imagePath: '',
};

/**
 * Recipe form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of recipe form component
 */
function RecipeForm({ handleSubmit, recipe }) {
  const nameField = useField('text',
    recipe ? recipe.name : '');
  const shortDescriptionField = useField('text',
    recipe ? recipe.shortDescription : '');
  const descriptionField = useField('text',
    recipe ? recipe.description : '');
  const difficultyField = useField('text',
    recipe ? recipe.difficulty.toString() : '3');
  const estimatedMinutesField = useField('number',
    recipe ? recipe.estimatedMinutes : 0);
  const [ingredients, setIngredients] = useState(
    recipe ? recipe.ingredients: [{ ...initialIngredient }]);
  const [steps, setSteps] = useState(
    recipe ? recipe.steps: [{ ...initialStep }]);
  // ingredients
  // steps

  /**
   * Handle submit request
   * @param {Object} newSubmitRequest - register request object
   */
  async function handleSubmitRecipe(newSubmitRequest) {
    newSubmitRequest.preventDefault();
    const recipe = {
      name: nameField.value,
      imagePath: '',
      shortDescription: shortDescriptionField.value,
      description: descriptionField.value,
      difficulty: helper.tryParseInt(difficultyField.value, 1),
      estimatedMinutes: helper.tryParseInt(estimatedMinutesField.value, 0),
      ingredients: ingredients,
      steps: steps,
    };
    await handleSubmit(recipe);
  }

  /**
   * Handle ingredient value change
   * @param {Int} index - ingredient index
   * @param {String} dataField - change data field
   * @param {Event} event - html event
   */
  function handleIngredientChange(index, dataField, event) {
    const newIngredients = [...ingredients];
    const value = event.target.value;

    switch (dataField) {
    case ingredientFieldName:
      newIngredients[index].name = value;
      break;
    case ingredientFieldQuantity:
      newIngredients[index].quantity =
        helper.tryParseFloat(value, 1);
      break;
    case ingredientFieldUnit:
      newIngredients[index].unit = value;
      break;
    case ingredientFieldImagePath:
      newIngredients[index].imagePath = value;
      break;
    default:
      break;
    }

    setIngredients(newIngredients);
  }

  /**
   * Handle concat ingredient
   * @param {Event} event - html event
   */
  function handleIngredientConcat(event) {
    const newIngredients = ingredients.concat({ ...initialIngredient });
    setIngredients(newIngredients);
  }

  /**
   * Handle remove ingredient
   * @param {Int} index - ingredient index
   * @param {Event} event - html event
   */
  function handleIngredientRemove(index, event) {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);

    if (newIngredients.length === 0) {
      newIngredients.push({ ...initialIngredient });
    }

    setIngredients(newIngredients);
  }

  /**
   * Handle step value change
   * @param {Int} index - step index
   * @param {String} dataField - change data field
   * @param {Event} event - html event
   */
  function handleStepChange(index, dataField, event) {
    const newSteps = [...steps];
    const value = event.target.value;

    switch (dataField) {
    case stepFieldDescription:
      newSteps[index].description = value;
      break;
    case stepFieldWarning:
      newSteps[index].warning = value;
      break;
    case stepFieldTip:
      newSteps[index].tip = value;
      break;
    case stepFieldImagePath:
      newSteps[index].imagePath = value;
      break;
    default:
      break;
    }

    setSteps(newSteps);
  }

  /**
   * Handle concat step
   * @param {Event} event - html event
   */
  function handleStepConcat(event) {
    const newSteps = steps.concat({ ...initialStep });
    setSteps(newSteps);
  }

  /**
   * Handle remove step
   * @param {Int} index - ingredient index
   * @param {Event} event - html event
   */
  function handleStepRemove(index, event) {
    const newSteps = [...steps];
    newSteps.splice(index, 1);

    if (newSteps.length === 0) {
      newSteps.push({ ...initialStep });
    }

    setSteps(newSteps);
  }

  return (
    <div>
      <Form onSubmit={handleSubmitRecipe}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Recipe name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type={nameField.type}
              name='name'
              value={nameField.value}
              onChange={nameField.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Short description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type={shortDescriptionField.type}
              name='shortDescription'
              value={shortDescriptionField.value}
              onChange={shortDescriptionField.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as='textarea'
              name='description'
              value={descriptionField.value}
              onChange={descriptionField.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Difficulty
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as='select'
              name='difficulty'
              value={difficultyField.value}
              onChange={difficultyField.onChange}
            >
              <option value='1'>Very easy</option>
              <option value='2'>Easy</option>
              <option value='3'>Normal</option>
              <option value='4'>Hard</option>
              <option value='5'>Very hard</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Estimated time (minutes)
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type={estimatedMinutesField.type}
              name='estimatedMinutes'
              value={estimatedMinutesField.value}
              onChange={estimatedMinutesField.onChange}
              min="0"
            />
          </Col>
        </Form.Group>
        { ingredients.map( (ingredient, index) => {
          return (
            <Form.Group as={Row} className="mb-3" key={`ingredient${index}`}>
              <Form.Label column sm={2}>
                {index === 0 ? 'Ingredients': ''}
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type='text'
                  name={`ingredientName${index}`}
                  value={ingredient.name}
                  placeholder="Name"
                  onChange={handleIngredientChange.bind(
                    null, index, ingredientFieldName)}
                />
              </Col>
              <Col sm={2}>
                <Form.Control
                  type='number'
                  name={`ingredientQuantity${index}`}
                  value={ingredient.quantity}
                  min='0'
                  placeholder="Quantity"
                  onChange={handleIngredientChange.bind(
                    null, index, ingredientFieldQuantity)}
                />
              </Col>
              <Col sm={2}>
                <Form.Control
                  type='text'
                  name={`ingredientUnit${index}`}
                  value={ingredient.unit}
                  placeholder="Unit"
                  onChange={handleIngredientChange.bind(
                    null, index, ingredientFieldUnit)}
                />
              </Col>
              <Col sm={2}>
                <div className="d-grid gap-2">
                  <Button
                    variant='danger'
                    onClick={handleIngredientRemove.bind(null, index)}
                  >
                    Remove
                  </Button>
                </div>
              </Col>
            </Form.Group>
          );
        })}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} />
          <Col sm={10}>
            <div className="d-grid gap-2">
              <Button
                variant='success'
                onClick={handleIngredientConcat}
              >
                Add new ingredient.
              </Button>
            </div>
          </Col>
        </Form.Group>
        { steps.map( (step, index) => {
          return (
            <div key={`step${index}`}>
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={2}>
                  {index === 0 ? 'Steps': ''}
                </Form.Label>
                <Form.Label column sm={2}>
                  {`Step ${index + 1}`}
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as='textarea'
                    name={`stepDescription${index}`}
                    value={step.description}
                    onChange={handleStepChange.bind(
                      null, index, stepFieldDescription)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={2} />
                <Form.Label column sm={2}>
                  Tip
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as='textarea'
                    name={`stepTip${index}`}
                    value={step.tip}
                    onChange={handleStepChange.bind(
                      null, index, stepFieldTip)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={2} />
                <Form.Label column sm={2}>
                  Warning
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    as='textarea'
                    name={`stepWarning${index}`}
                    value={step.warning}
                    onChange={handleStepChange.bind(
                      null, index, stepFieldWarning)}
                  />
                </Col>
                <Col sm={2}>
                  <div className="d-grid gap-2">
                    <Button
                      variant='danger'
                      onClick={handleStepRemove.bind(null, index)}
                    >
                      Remove
                    </Button>
                  </div>
                </Col>
              </Form.Group>
            </div>
          );
        })}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} />
          <Col sm={10}>
            <div className="d-grid gap-2">
              <Button
                variant='success'
                onClick={handleStepConcat}
              >
                Add new step.
              </Button>
            </div>
          </Col>
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
        >
          Save
        </Button>
      </Form>
    </div>
  );
}

RecipeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  recipe: PropTypes.any.isRequired,
};

export default RecipeForm;
