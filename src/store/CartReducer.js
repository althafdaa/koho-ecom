import React from "react";
import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const Reducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartReducer = (props) => {
  const [cartState, cartDispatch] = useReducer(Reducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
  };

  const cartKonteks = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartKonteks}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartReducer;
