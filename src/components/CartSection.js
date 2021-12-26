import React, { useContext } from "react";
import "./css/CartSection.css";
import ModalCart from "./ModalCart";
import CartContext from "../store/CartContext";

const CartSection = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rp${cartCtx.totalAmount}.000`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const debugHandler = (e) => {
    e.preventDefault();
    console.log(cartCtx);
  };

  const cartItems = cartCtx.items.map((item) => (
    <li className='cart-items__list mb-4' key={item.id}>
      <h4>{item.name}</h4>
      <div className='d-flex justify-content-between'>
        <div className='me-4 mt-2'>
          <span className='price me-5'>Rp{item.price}</span>
          <span className='amount'>x{item.amount}</span>
        </div>
        <div className='cart-items__actions'>
          <button onClick={cartItemRemoveHandler.bind(null, item.id)}>-</button>
          <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
        </div>
      </div>
    </li>
  ));

  return (
    <ModalCart onClick={props.onClose}>
      <div className='modal-header'>
        <h5 className='modal-title'>Your Order</h5>
        <button
          type='button'
          className='btn-close'
          onClick={props.onClose}
        ></button>
      </div>
      <div className='modal-body'>
        {hasItems && <ul className='list-unstyled cart-items'>{cartItems}</ul>}
        {!hasItems && (
          <h2 className='text-center top-50'>
            Please add your order to cart first
          </h2>
        )}
      </div>

      {hasItems && (
        <div className='modal-footer cart-items__total d-flex justify-content-between fw-bold'>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      )}
      {hasItems && (
        <button
          onClick={debugHandler}
          type='button'
          className='cart-items__button'
        >
          Order
        </button>
      )}
    </ModalCart>
  );
};

export default CartSection;
