import React, { useContext } from "react";
import "./css/NavBarCart.css";
import { BsCartFill } from "react-icons/bs";
import CartContext from "../store/CartContext";

const NavBarCart = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className='button-nav' type='button' onClick={props.onClick}>
      <span>
        <BsCartFill className='icons-nav bump' />
      </span>
      <span className='badge-nav'>{numberOfCartItems}</span>
    </button>
  );
};

export default NavBarCart;
