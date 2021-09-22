const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const UserModel = require('../models/user_model');
const helper = require('./test_helper');
const config = require('../utils/config');

const api = supertest(app);

const dummyUsername = helper.dummyUser.username;
const dummyDisplayName = helper.dummyUser.displayName;
const dummyPassword = helper.dummyUser.password;
let dummyPasswordHashFrontEnd = null;
let dummyPasswordHashBackEnd = null;

describe('When there is initially one user in db', () => {
  beforeEach(async () => {
    await UserModel.deleteMany({});
    if (!dummyPasswordHashFrontEnd) {
      dummyPasswordHashFrontEnd =
        await bcrypt.hash(dummyPassword, config.SALT_ROUND);
      dummyPasswordHashBackEnd =
        await bcrypt.hash(dummyPasswordHashFrontEnd, config.SALT_ROUND);
    }

    const user = new UserModel({
      username: dummyUsername,
      displayName: dummyDisplayName,
      passwordHash: dummyPasswordHashBackEnd,
    });

    await user.save();
  });

  test('login succeeds with a correct username and password', async () => {
    const loginInfo = {
      username: dummyUsername,
      passwordHash: dummyPasswordHashFrontEnd,
    };

    const response = await api
      .post('/api/login')
      .send(loginInfo)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const token = response.body;
    expect(token.username).toEqual(dummyUsername);
  });

  test('login fails with an incorrect password', async () => {
    const loginInfo = {
      username: dummyUsername,
      passwordHash: dummyPasswordHashFrontEnd + 'lmaoxd',
    };

    await api
      .post('/api/login')
      .send(loginInfo)
      .expect(401);
  });

  test('login fails with an incorrect username', async () => {
    const loginInfo = {
      username: dummyUsername + 'lmaoxd',
      passwordHash: dummyPasswordHashFrontEnd,
    };

    await api
      .post('/api/login')
      .send(loginInfo)
      .expect(401);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
