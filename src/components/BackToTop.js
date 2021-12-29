import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./css/BackToTop.css";

const BackToTop = () => {
  return (
    <a className='icons-backtotop' href='#main'>
      {" "}
      <FaArrowCircleUp />{" "}
    </a>
  );
};

export default BackToTop;
