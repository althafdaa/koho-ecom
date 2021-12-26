import React from "react";
import "./css/ItemsReady.css";
import ItemsList from "./ItemsList";
const DUMMY_ITEMS = [
  {
    id: "m1",
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/9/11/e817b56d-aa4d-423b-ad8b-e79878d8a9a8.png",
    image2:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/9/11/7a2dc37a-9df2-474d-b4c5-22f89914b6c5.png",
    name: "Lianhua Qingwen Jiaonang",
    desc: "Membantu meredakan gejala Influenza seperti demam, panas dalam, nyeri sendi, hidung tersumbat, sakit kepala, batuk, tenggorokan kering",
    price: "58.000",
  },
  {
    id: "m2",
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/7/31/79a65415-cba1-4166-a882-2ecf61c33c71.png",
    image2:
      "https://images.tokopedia.net/img/cache/900/product-1/2020/6/2/8213272/8213272_589daad4-5755-4def-a29c-d29cc712282d_2048_2048.jpg",
    name: "Minyak Gosok Liu Lin Pa",
    desc: "Minyak gosok dari bahan herbal sangat ampuh dalam meminimalisir pegal-pegal, saat ada bentolan atau gigitan serangga.",
    price: "68.000",
  },
  {
    id: "m3",
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/30/72d17ea0-3c3a-4003-af1f-155cd463df78.jpg",
    name: "Monogatari Lubricant Gel",
    image2:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/9/fcf833b1-83ca-4c0c-a924-fcb39abefe40.jpg",
    desc: "Water based lubricant aman digunakan dengan tanpa kondom, maupun kondom latex maupun non latex karena berbahan dasar air yang tidak menyebabkan kerusakan pada bahan yang digunakan kondom.",
    price: "50.500",
  },
];

const ItemsReady = () => {
  const itemsListMap = DUMMY_ITEMS.map((item) => (
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
      <ul className='list-unstyled d-lg-flex justify-content-evenly '>
        {itemsListMap}
      </ul>
    </div>
  );
};

export default ItemsReady;
