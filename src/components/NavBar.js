import React from 'react';
import './css/NavBar.css';

import NavBarCart from './NavBarCart';

const NavBar = (props) => {
  return (
    <nav className='object-contain navbar navbar-expand-lg navbar-dark fixed-top navbar-app'>
      <div className='container'>
        <a className='navbar-brand' href='/' rel='noreferrer'>
          KOHO APP
        </a>
        <NavBarCart onClick={props.onClick} />
      </div>
    </nav>
  );
};

export default NavBar;
