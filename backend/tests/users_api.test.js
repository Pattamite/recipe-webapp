const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const config = require('../utils/config');
const UserModel = require('../models/user_model');

const api = supertest(app);

describe('when there is initially one user in db', () => {
  const dummyUsername = helper.dummyUser.username;
  const dummyDisplayName = helper.dummyUser.displayName;
  const dummyPassword = helper.dummyUser.password;
  let dummyPasswordHashFrontEnd = null;
  let dummyPasswordHashBackEnd = null;

  const newUsername = 'testUserNameForTestingUserApi';
  const newDisplayName = 'TestUserDisplayNameForTestingUserApi';
  const newPassword = 'testPasswordForTestingUserApi';
  let newPasswordHashFrontEnd = null;
  let newPasswordHashBackEnd = null;

  let isHashedPassword = false;

  const expectedPaginationSectionWithOneUser = {
    page: 1,
    pageNext: null,
    pagePrev: null,
    pageTotal: 1,
    resultsCount: 1,
    resultsPerpage: 100,
    resultsTotal: 1,
  };

  beforeEach(async () => {
    await UserModel.deleteMany({});
    if (!isHashedPassword) {
      dummyPasswordHashFrontEnd =
        await bcrypt.hash(dummyPassword, config.SALT_ROUND);
      dummyPasswordHashBackEnd =
        await bcrypt.hash(dummyPasswordHashFrontEnd, config.SALT_ROUND);
      newPasswordHashFrontEnd =
        await bcrypt.hash(newPassword, config.SALT_ROUND);
      newPasswordHashBackEnd =
        await bcrypt.hash(newPasswordHashFrontEnd, config.SALT_ROUND);
      isHashedPassword = true;
    }

    const user = new UserModel({
      username: dummyUsername,
      displayName: dummyDisplayName,
      passwordHash: dummyPasswordHashBackEnd,
    });

    await user.save();
  });

  test('can get fisrt page of pagination object ' +
    'by using base api url', async () => {
    const response = await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const queriedResult = response.body;

    expect(queriedResult.pagination)
      .toEqual(expectedPaginationSectionWithOneUser);
    expect(queriedResult.results).toHaveLength(1);
    expect(queriedResult.results[0].username).toEqual(dummyUsername);
    expect(queriedResult.results[0].displayName).toEqual(dummyDisplayName);
  });

  test('can get fisrt page of pagination object ' +
    'by query with page number 1', async () => {
    const response = await api
      .get('/api/users?page=1')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const queriedResult = response.body;

    expect(queriedResult.pagination)
      .toEqual(expectedPaginationSectionWithOneUser);
    expect(queriedResult.results).toHaveLength(1);
    expect(queriedResult.results[0].username).toEqual(dummyUsername);
    expect(queriedResult.results[0].displayName).toEqual(dummyDisplayName);
  });

  test('can get fisrt page of pagination object ' +
    'by query with page number more than 1', async () => {
    const response = await api
      .get('/api/users?page=2')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const queriedResult = response.body;

    expect(queriedResult.pagination)
      .toEqual(expectedPaginationSectionWithOneUser);
    expect(queriedResult.results).toHaveLength(1);
    expect(queriedResult.results[0].username).toEqual(dummyUsername);
    expect(queriedResult.results[0].displayName).toEqual(dummyDisplayName);
  });

  test('can get fisrt page of pagination object ' +
    'by query with page number less than 1', async () => {
    const response = await api
      .get('/api/users?page=0')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const queriedResult = response.body;

    expect(queriedResult.pagination)
      .toEqual(expectedPaginationSectionWithOneUser);
    expect(queriedResult.results).toHaveLength(1);
    expect(queriedResult.results[0].username).toEqual(dummyUsername);
    expect(queriedResult.results[0].displayName).toEqual(dummyDisplayName);
  });

  test('can get fisrt page of pagination object ' +
    'by query with non-int page number', async () => {
    const response = await api
      .get('/api/users?page=lmaoxd')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const queriedResult = response.body;

    expect(queriedResult.pagination)
      .toEqual(expectedPaginationSectionWithOneUser);
    expect(queriedResult.results).toHaveLength(1);
    expect(queriedResult.results[0].username).toEqual(dummyUsername);
    expect(queriedResult.results[0].displayName).toEqual(dummyDisplayName);
  });

  test('can get user info by using id', async () => {
    const dummyUser = await UserModel
      .findOne({ username: dummyUsername });

    const response = await api
      .get(`/api/users/id/${dummyUser.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const queriedResult = response.body;

    expect(queriedResult.username).toEqual(dummyUsername);
    expect(queriedResult.displayName).toEqual(dummyDisplayName);
  });

  test('return code 404 when get user by using non-existed id', async () => {
    const dummyUser = await UserModel
      .findOne({ username: dummyUsername });
    const dummyId = dummyUser.id;

    await UserModel.deleteMany({});

    await api
      .get(`/api/users/id/${dummyId}`)
      .expect(404);
  });

  test('can get user info by using username', async () => {
    const response = await api
      .get(`/api/users/user/${dummyUsername}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const queriedResult = response.body;

    expect(queriedResult.username).toEqual(dummyUsername);
    expect(queriedResult.displayName).toEqual(dummyDisplayName);
  });

  test('return code 404 when get user ' +
   'by using non-existed username', async () => {
    await api
      .get(`/api/users/user/${dummyUsername}lmaoxdtotallyrandom`)
      .expect(404);
  });

  test('creation succeeds with a fresh username', async () => {
    const newUser = {
      username: newUsername,
      displayName: newDisplayName,
      passwordHash: newPasswordHashBackEnd,
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newUserFromDb = await UserModel.findOne({ username: newUsername });
    expect(newUserFromDb.username).toEqual(newUsername);
    expect(newUserFromDb.displayName).toEqual(newDisplayName);

    const originalUserFromDb =
      await UserModel.findOne({ username: dummyUsername });
    expect(originalUserFromDb.username).toEqual(dummyUsername);
    expect(originalUserFromDb.displayName).toEqual(dummyDisplayName);
  });

  test('creation fails with proper statuscode and ' +
    'message if username already taken', async () => {
    const newUser = {
      username: dummyUsername,
      displayName: 'Superuser',
      passwordHash: 'lmaoxd',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const originalUserFromDb =
      await UserModel.findOne({ username: dummyUsername });
    expect(originalUserFromDb.username).toEqual(dummyUsername);
    expect(originalUserFromDb.displayName).toEqual(dummyDisplayName);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
