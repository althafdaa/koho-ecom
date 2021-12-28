import React, { useContext } from "react";
import "./css/ItemsList.css";
import ItemListForm from "./ItemListForm";
import CartContext from "../store/CartContext";

const ItemsList = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <React.Fragment>
      <div className='card card-items mb-3'>
        <div className='card-body d-flex flex-column align-items-center'>
          <div id={props.id} className='carousel carousel-dark slide'>
            <div className='carousel-inner'>
              <div
                className='carousel-item active
          
          '
                data-bs-interval='5000'
              >
                <img
                  src={props.image}
                  className='d-block w-100'
                  alt='carousel-1'
                />
              </div>
              <div
                className='carousel-item
          
          '
                data-bs-interval='5000'
              >
                <img
                  src={props.image2}
                  className='d-block w-100'
                  alt='carousel-1'
                />
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target={`#${props.id}`}
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>

              <button
                className='carousel-control-next'
                type='button'
                data-bs-target={`#${props.id}`}
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>

            <div>
              <h5 className='card-title'>{props.name}</h5>
              <p className='card-text'>{props.desc}</p>
              <div className='d-flex justify-content-between'>
                <p
                  className='card-text card-items__price
            
            '
                >
                  Rp {props.price}.000
                </p>
                <ItemListForm onAddToCart={addToCartHandler} id={props.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemsList;
