import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  setNotification,
  notificationTypeError,
  notificationTypeConfirm,
} from '../reducers/notification_reducer';
import {
  setUserAndToken,
} from '../reducers/user_reducer';

/**
 * Navigation bar component
 * @param {Object} props - component arguments
 * @return {JSX} jsx of navigation bar component
 */
function NavBar(props) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => {
    return state.user;
  });

  /**
   * Handle logout request
   * @return {Boolean} login result
   */
  async function handleLogout() {
    try {
      dispatch(setUserAndToken(null, null));
      setNotification(
        'Logout success. Goodbye.',
        notificationTypeConfirm,
      );
      return true;
    } catch (exception) {
      setNotification(
        'Logout failed. Please contact developer.',
        notificationTypeError,
      );
      return false;
    }
  }

  const padding = {
    padding: 5,
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/recipes">Recipes</Link>
          </Nav.Link>
          {userState.user ?
            <>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/yourrecipes">Your recipes</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/newrecipe">New recipe</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to='/' onClick={handleLogout}>
                  Logout
                </Link>
              </Nav.Link>
            </> :
            <>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/login">Login</Link>
              </Nav.Link>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
