import React from "react";
import "./css/NavBar.css";

import NavBarCart from "./NavBarCart";

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top navbar-app'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          KOHO APP
        </a>
        <NavBarCart onClick={props.onClick} />
      </div>
    </nav>
  );
};

export default NavBar;
