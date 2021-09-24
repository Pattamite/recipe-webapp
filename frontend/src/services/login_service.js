import axios from 'axios';
const baseUrl = '/api/login';

/**
 * Login to website by using credentials
 * @param {Object} credentials - object that contain username and password
 * @return {Object} response data
 */
async function login(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}

const loginService = {
  login,
};

export default loginService;
