import React from "react";
import "./css/ShopSection.css";
import CarouselShop from "./CarouselShop";
import Items from "./Items";

const ShopSection = () => {
  return (
    <section id='shop'>
      <CarouselShop />
      <div className='container-fluid mt-3'>
        <h1 className='text-center'>BEST SELLER</h1>
        <Items />
      </div>
    </section>
  );
};

export default ShopSection;
