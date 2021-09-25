import axios from 'axios';
const baseUrl = '/api/recipes';

/**
 * Get lastest recipe
 * @param {Int} pageNumber - page number
 * @return {Object} response data
 */
async function getLastestRecipePagination(pageNumber = 1) {
  const request = axios.get(`${baseUrl}/lastest=tue&page=${pageNumber}`);
  return request.then((response) => {
    return response.data;
  });
}

/**
 * Get popular recipe
 * @param {Int} pageNumber - page number
 * @return {Object} response data
 */
async function getPopularRecipePagination(pageNumber = 1) {
  const request = axios.get(`${baseUrl}/popular=tue&page=${pageNumber}`);
  return request.then((response) => {
    return response.data;
  });
}

/**
 * Create new recipe and save to database
 * @param {Object} newRecipe - new recipe
 * @param {String} token - user token
 * @return {Object} response data
 */
async function create(newRecipe, token) {
  const config = {
    headers: { Authorization: generateAuthorizationString(token) },
  };

  const response = await axios.post(baseUrl, newRecipe, config);
  return response.data;
}

/**
 * Update recipe and save to database
 * @param {String} id - recipe id
 * @param {Object} recipe - recipe
 * @param {String} token - user token
 * @return {Object} response data
 */
async function update(id, recipe, token) {
  const config = {
    headers: { Authorization: generateAuthorizationString(token) },
  };

  const response = await axios.put(`${baseUrl}/id/${id}`, recipe, config);
  return response.data;
}

/**
 * Generate autorization string from token
 * @param {String} token - user token
 * @return {String} autorization string
 */
function generateAuthorizationString(token) {
  return `bearer ${token}`;
}

const recipesService = {
  getLastestRecipePagination,
  getPopularRecipePagination,
  create,
  update,
};

export default recipesService;
