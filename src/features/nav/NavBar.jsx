import React from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';


const NavBar = ({ createFormOpen }) => {
  const auth = useSelector(state => state.auth);
  const {authenticated, currentUser} = auth;

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/'>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events'>
          Events
        </Menu.Item>
        {authenticated && (
          <Menu.Item as={Link} to='/createEvent'>
            <Button color='green' content='Create Event' />
          </Menu.Item>
        )}
        <Menu.Item as={Link} to='/test'>
          Test
        </Menu.Item>
        {authenticated && <SignedInMenu currentUser={currentUser}/>}
        {!authenticated && (
          <SignedOutMenu />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
