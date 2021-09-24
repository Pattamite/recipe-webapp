import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import useField from '../hooks/use_field';

import {
  setNotification,
  notificationTypeError,
  notificationTypeConfirm,
} from '../reducers/notification_reducer';
import {
  setUserAndToken,
} from '../reducers/user_reducer';

import loginService from '../services/login_service';

/**
 * Login form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of notification component
 */
function LoginForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const usernameField = useField('text');
  const passwordField = useField('password');

  /**
   * Handle form submit event
   * @param {Event} event - html event
  */
  async function handleSubmit(event) {
    event.preventDefault();
    const newLoginRequest = {
      username: usernameField.value,
      password: passwordField.value,
    };
    const result = await handleLogin(newLoginRequest);
    usernameField.setValue('');
    passwordField.setValue('');

    if (result) {
      history.push('/');
    }
  }

  /**
   * Handle login request
   * @param {Object} newLoginRequest - login request object
   * @return {Boolean} login result
   */
  async function handleLogin(newLoginRequest) {
    try {
      console.log('newLoginRequest', newLoginRequest);
      const user = await loginService.login(newLoginRequest);
      dispatch(setUserAndToken(user, user.token));
      dispatch(setNotification(
        `Login success. Welcome, ${user.displayName}.`,
        notificationTypeConfirm,
      ));
      return true;
    } catch (exception) {
      dispatch(setNotification(
        'Login failed. Please check your username and password',
        notificationTypeError,
      ));
      return false;
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type={usernameField.type}
            name='username'
            value={usernameField.value}
            onChange={usernameField.onChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={passwordField.type}
            name='password'
            value={passwordField.value}
            onChange={passwordField.onChange}
          />
          <Button
            variant='primary'
            type='submit'
            style={{ marginTop: 5 }}
          >
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginForm;
