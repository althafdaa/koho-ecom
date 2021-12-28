import React from "react";
import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const Reducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    const index = state.items.findIndex((item) => item.id === action.id);

    if (state.items[index].amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
      updatedItems[index].amount -= 1;
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - state.items[index].price,
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
