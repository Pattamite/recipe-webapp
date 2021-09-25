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

import usersService from '../services/users_service';

/**
 * Register form component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of register form component
 */
function RegisterForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const usernameField = useField('text');
  const displayNameField = useField('text');
  const passwordField = useField('password');

  /**
   * Handle form submit event
   * @param {Event} event - html event
  */
  async function handleSubmit(event) {
    event.preventDefault();
    const newRegisterRequest = {
      username: usernameField.value,
      displayName: displayNameField.value,
      password: passwordField.value,
    };
    const result = await handleRegister(newRegisterRequest);

    if (result) {
      usernameField.setValue('');
      displayNameField.setValue('');
      passwordField.setValue('');
      history.push('/login');
    }
  }

  /**
   * Handle register request
   * @param {Object} newRegisterRequest - register request object
   * @return {Boolean} register result
   */
  async function handleRegister(newRegisterRequest) {
    try {
      await usersService.register(newRegisterRequest);
      dispatch(setNotification(
        'Register success. Please login to continue.',
        notificationTypeConfirm,
      ));
      return true;
    } catch (exception) {
      dispatch(setNotification(
        'Register failed. Username might already existed.',
        notificationTypeError,
      ));
      return false;
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type={usernameField.type}
            name='username'
            value={usernameField.value}
            onChange={usernameField.onChange}
          />
          <Form.Label>Display name</Form.Label>
          <Form.Control
            type={displayNameField.type}
            name='displayName'
            value={displayNameField.value}
            onChange={displayNameField.onChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={passwordField.type}
            name='password'
            value={passwordField.value}
            onChange={passwordField.onChange}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
