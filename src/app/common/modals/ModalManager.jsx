import React from 'react';
import TestModal from './../../../features/test/testModal';
import { useSelector } from 'react-redux';
import { LoginForm } from './../../../features/auth/LoginForm';

export const ModalManager = () => {
  const modalLookup = { TestModal, LoginForm };
  const currentModal = useSelector((state) => state.modals);
  let renderdModal;
  if (currentModal) 
  {
      const {modalType, modalProps} = currentModal;
      const ModalComponent = modalLookup[modalType];
      renderdModal = <ModalComponent {...modalProps}/>
  }

  return <span>{renderdModal}</span>;
};
