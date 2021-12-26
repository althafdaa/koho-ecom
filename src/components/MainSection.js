import React from "react";
import NavBar from "./NavBar";
import "./css/MainSection.css";
import { BsWhatsapp, BsFillBasketFill, BsArrowBarDown } from "react-icons/bs";

const MainSection = (props) => {
  return (
    <section
      className='d-flex flex-column align-items-center justify-content-center position-relative text-white'
      id='main'
    >
      <NavBar onClick={props.onOpen} />
      <div className='text-center'>
        <h1>KoHo </h1>
        <h2>EVERYTHING IN YOUR HAND</h2>
      </div>

      <div className='icons-link my-3'>
        <ul className='list-unstyled d-flex'>
          <li className='mx-3'>
            <a href=''>
              <BsWhatsapp className='icons-link__main' />
            </a>
          </li>
          <li className='mx-3'>
            <a href=''>
              <BsFillBasketFill className='icons-link__main' />
            </a>
          </li>
        </ul>
      </div>

      <div className='next-section position-absolute bottom-0 text-center'>
        <a className='text-decoration-none text-white' href=''>
          <h5>Shop now</h5>
          <BsArrowBarDown className='icons-link__down' />
        </a>
      </div>
    </section>
  );
};

export default MainSection;
