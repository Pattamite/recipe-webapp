import axios from 'axios';
const baseUrl = '/api/users';

/**
 * Register to website by using credentials
 * @param {Object} credentials - object that contain username,
 *                                display name, and password
 * @return {Object} response data
 */
async function register(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}

const usersService = {
  register,
};

export default usersService;
