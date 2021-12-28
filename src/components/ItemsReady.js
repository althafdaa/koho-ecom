import React, { useEffect, useState } from "react";
import "./css/ItemsReady.css";
import ItemsList from "./ItemsList";

const ItemsReady = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://react-proj-d9133-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      );
      const responseJSON = await response.json();

      const loadedProducts = [];

      for (const key in responseJSON) {
        loadedProducts.push({
          id: key,
          name: responseJSON[key].name,
          image: responseJSON[key].image,
          image2: responseJSON[key].image2,
          desc: responseJSON[key].desc,
          price: responseJSON[key].price,
        });
      }

      setProducts(loadedProducts);
    };
    fetchProducts();
  }, []);

  const itemsListMap = products.map((item) => (
    <li key={item.id}>
      <ItemsList
        key={item.id}
        id={item.id}
        name={item.name}
        desc={item.desc}
        price={item.price}
        image={item.image}
        image2={item.image2}
      />
    </li>
  ));

  return (
    <div className='container-fluid'>
      <ul
        className='list-unstyled d-lg-flex container-fluid
      '
      >
        {itemsListMap}
      </ul>
    </div>
  );
};

export default ItemsReady;
