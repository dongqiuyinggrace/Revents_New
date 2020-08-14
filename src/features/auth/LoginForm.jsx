import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import TextInput from './../../app/common/form/TextInput';
import { ModalWrapper } from './../../app/common/modals/ModalWrapper';
import { closeModal } from '../../app/common/modals/modalReducer';
import { login } from './authActions';

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper size='mini' header='Sign in to Re-vents'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(value, {setSubmitting}) => {
          dispatch(login(value));
          setSubmitting(true);
          dispatch(closeModal());
        }}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className='ui form'>
            <TextInput name='email' placeholder='Email' />
            <TextInput name='password' placeholder='password' type='password' />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              color='teal'
              type='submit'
              content='Login'
              size='large'
              fluid
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};
