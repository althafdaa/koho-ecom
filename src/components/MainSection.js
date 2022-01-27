import React from 'react';
import NavBar from './NavBar';
import './css/MainSection.css';
import { BsWhatsapp, BsFillBasketFill, BsArrowBarDown } from 'react-icons/bs';

const MainSection = (props) => {
  return (
    <section
      className='d-flex flex-column align-items-center justify-content-center position-relative text-white'
      id='main'
    >
      <NavBar onClick={props.onOpen} />
      <div className='text-center vw-100'>
        <h1>KoHo</h1>
        <h2>EVERYTHING IN YOUR HAND</h2>
      </div>

      <div className='icons-link my-3'>
        <ul className='list-unstyled d-flex'>
          <li className='mx-3'>
            <a
              href='https://wa.me/89660606763?text=Halo%20kamu%20sedang%20menghubungi%20Althaf%20Demiandra%20pemilik%20repo%20ini,%20lets%20connect!'
              target='__blank'
            >
              <BsWhatsapp className='icons-link__main' />
            </a>
          </li>
          <li className='mx-3'>
            <a href='https://www.tokopedia.com/koho' target='__blank'>
              <BsFillBasketFill className='icons-link__main' />
            </a>
          </li>
        </ul>
      </div>

      <div className='next-section position-absolute bottom-0 text-center'>
        <a className='text-decoration-none text-white' href='#products'>
          <h5>Shop now</h5>
          <BsArrowBarDown className='icons-link__down' />
        </a>
      </div>
    </section>
  );
};

export default MainSection;
