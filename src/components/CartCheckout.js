import React from "react";
import "./css/CartCheckout.css";

const CartCheckout = (props) => {
  return (
    <form className='mb-3'>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='form-control'
          id='name'
          placeholder='Nama Lengkap'
        />
      </div>
      <div>
        <label htmlFor='address'>Address</label>
        <input
          type='text'
          className='form-control'
          id='address'
          placeholder='Alamat Lengkap dan Kota'
        />
      </div>
      <div>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='number'
          className='form-control'
          id='phone'
          placeholder='08xxxxx'
        />
      </div>
      <button type='button' className='cart-items__confirm w-100'>
        Confirm
      </button>
    </form>
  );
};

export default CartCheckout;
