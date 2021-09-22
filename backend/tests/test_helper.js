// const jwt = require('jsonwebtoken');
const UserModel = require('../models/user_model');
// const config = require('../utils/config');

const dummyUser = {
  username: 'dummy',
  displayName: 'Dummy',
  password: 'dummyPassword',
};

/** Get every user in database */
async function getUsersInDb() {
  const users = await UserModel.find({});
  return users.map((user) => {
    return user.toJSON();
  });
}

const testHelper = {
  dummyUser,
  getUsersInDb,
};

module.exports = testHelper;
