import React, { useRef, useState } from "react";
import "./css/ItemsListForm.css";

const ItemListForm = (props) => {
  const [enteredItemIsValid, setEnteredItemIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // VALUE GET
    const enteredAmount = amountInputRef.current.value;
    // VALUE PARSED
    const enteredAmountParse = +enteredAmount;

    // VALUE VALIDATION
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountParse < 1 ||
      enteredAmountParse > 5
    ) {
      setEnteredItemIsValid(false);
      return;
    }
    // VALUE MOVE TO ANOTHER COMP
    console.log(enteredAmountParse);
    props.onAddToCart(enteredAmountParse);
  };
  return (
    <form className='form-items' onSubmit={submitHandler}>
      <input
        ref={amountInputRef}
        type='text'
        id={props.id}
        type='number'
        min='1'
        max='5'
        step='1'
        defaultValue='1'
      />
      {!enteredItemIsValid && <p>Please enter a valid Amount</p>}
      <button type='submit'>Add</button>
    </form>
  );
};

export default ItemListForm;
