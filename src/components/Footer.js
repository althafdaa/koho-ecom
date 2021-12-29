import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='d-flex flex-wrap align-items-center py-3 my-4 border-top container'>
        <p className='col-md-4 mb-0 text-muted'>© 2021 KoHo E-Commerce</p>

        <ul className='nav col-md-4 justify-content-end'>
          <li className='nav-item'>
            <a href='#main' className='nav-link px-2 text-muted'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#products' className='nav-link px-2 text-muted'>
              Products
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://wa.me/89660606763?text=Halo%20kamu%20sedang%20menghubungi%20Althaf%20Demiandra%20pemilik%20repo%20ini,%20lets%20connect!'
              target='__blank'
              className='nav-link px-2 text-muted'
            >
              Contacts
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://www.tokopedia.com/koho'
              target='__blank'
              className='nav-link px-2 text-muted'
            >
              Tokopedia
            </a>
          </li>
        </ul>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
