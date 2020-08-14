import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { openModal } from './../../app/common/modals/modalReducer';

const SignedOutMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Menu.Item position='right'>
        <Button
          basic
          inverted
          content='Login'
          style={{ marginRight: 10 }}
          onClick={() => dispatch(openModal({modalType: 'LoginForm'}))}
        />
        <Button
          basic
          inverted
          content='Register'
        />
      </Menu.Item>
    </>
  );
};

export default SignedOutMenu;
