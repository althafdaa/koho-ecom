import React from 'react';
import './css/Modal.css';

const Backdrop = (props) => {
  return (
    <div
      className='backdrop-cart
  
  '
      onClick={props.onClick}
    ></div>
  );
};

const Modal = (props) => {
  return (
    <div
      className='modal-cart overflow-auto object-contain
      '
    >
      <div className='modal-cart__content d-flex flex-column'>
        {props.children}
      </div>
    </div>
  );
};

const ModalCart = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClick={props.onClick} />
      <Modal>{props.children}</Modal>
    </React.Fragment>
  );
};

export default ModalCart;
