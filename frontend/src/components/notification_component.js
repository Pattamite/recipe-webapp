import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { notificationTypeHide } from '../reducers/notification_reducer';

/**
 * Notification component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of notification component
 */
function Notification(props) {
  const notificationState = useSelector((state) => {
    return state.notification;
  });

  return (
    <div>
      {
        notificationState.type === notificationTypeHide ?
          <></> :
          <Alert variant={notificationState.type}>
            {notificationState.message}
          </Alert>
      }
    </div>
  );
}

export default Notification;
