import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import recipesService from '../services/recipes_service';

import RecipeList from './recipe_list_component';

/**
 * Lastest recipe page component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of recipe list component
 */
function LastestRecipesPage(props) {
  const pageNumber = useParams().page_number ? useParams().page_number : 1;
  const [prevPageNumber, setPrevPageNumber] = useState(null);
  const [nextPageNumber, setNextPageNumber] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setIsLoading(true);

    const resultPagination =
      await recipesService.getLastestRecipePagination(pageNumber);
    const pagination = resultPagination.pagination;
    const resultList = resultPagination.results;
    setPrevPageNumber(pagination.pagePrev);
    setNextPageNumber(pagination.pageNext);
    setRecipes(resultList);

    setIsLoading(false);
  }, [pageNumber]);

  return (
    <div>
      <h1>Lastest Recipes</h1>
      {isLoading ?
        <p>Loading...</p> :
        <div>
          <RecipeList recipes={recipes} />
          <Row>
            <Col sm={2}>
              {prevPageNumber ?
                <div className="d-grid gap-2">
                  <Link to={`/lastest-recipe/${prevPageNumber}`}>
                    <Button
                      variant='success'
                      onClick={handleIngredientConcat}
                    >
                      Previous page
                    </Button>
                  </Link>
                </div>:
                ''
              }
            </Col>
            <Col sm={8} />
            <Col sm={2}>
              {nextPageNumber ?
                <div className="d-grid gap-2">
                  <Link to={`/lastest-recipe/${nextPageNumber}`}>
                    <Button
                      variant='success'
                      onClick={handleIngredientConcat}
                    >
                      Next page
                    </Button>
                  </Link>
                </div>:
                ''
              }
            </Col>
          </Row>
        </div>
      }
    </div>
  );
}

export default LastestRecipesPage;
