import React, { useRef, useState, useContext } from "react";
import "./css/CartCheckout.css";
import CartContext from "../store/CartContext";

const isEmpty = (value) => value.trim() === "";

const CartCheckout = (props) => {
  const cartCtx = useContext(CartContext);
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    address: true,
    phone: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const confirmHandler = (props) => {
    props.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = nameInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);

    console.log(enteredNameIsValid);

    const formIsValid =
      enteredNameIsValid && enteredAddressIsValid && enteredPhoneIsValid;

    setFormInputValid({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      phone: enteredPhoneIsValid,
    });

    if (!formIsValid) {
      return;
    } else {
      const mapHelper = cartCtx.items.map((item) => item.name);

      window.open(
        `https://wa.me/89660606763?text=Halo kak saya ${enteredName} alamat di ${enteredAddress} dan nomor telfon ${enteredPhone} ingin memesan produk ${mapHelper} dengan total harga Rp${cartCtx.totalAmount}.000. Terima kasih!`,
        "__blank"
      );
      cartCtx.clearCart();
    }
  };

  return (
    <form className='mb-3' onSubmit={confirmHandler}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          ref={nameInputRef}
          type='text'
          className='form-control'
          id='name'
          placeholder='Nama Lengkap'
        />
        {!formInputValid.name && (
          <p className='validation'>Please enter a valid name</p>
        )}
      </div>
      <div>
        <label htmlFor='address'>Address</label>
        <input
          ref={addressInputRef}
          type='text'
          className='form-control'
          id='address'
          placeholder='Alamat Lengkap dan Kota'
        />
        {!formInputValid.address && (
          <p className='validation'>Please enter a valid address</p>
        )}
      </div>
      <div>
        <label htmlFor='phone'>Phone Number</label>
        <input
          ref={phoneInputRef}
          type='number'
          className='form-control'
          id='phone'
          placeholder='08xxxxx'
        />
        {!formInputValid.phone && (
          <p className='validation'>Please enter a valid phone number</p>
        )}
      </div>
      <div className='d-flex justify-content-end mt-3'>
        <button
          onClick={props.onCancel}
          type='button'
          className='cart-items__cancel me-3 w-25'
        >
          Cancel
        </button>
        <button className='cart-items__confirm w-25'>Confirm</button>
      </div>
    </form>
  );
};

export default CartCheckout;
