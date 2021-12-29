import React from "react";
import { useState } from "react";
import MainSection from "./components/MainSection";
import CartSection from "./components/CartSection";
import ShopSection from "./components/ShopSection";
import CartReducer from "./store/CartReducer";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartReducer>
      <BackToTop />
      {cartIsShown && <CartSection onClose={hideCartHandler} />}
      <MainSection onOpen={showCartHandler} />
      <ShopSection />
      <Footer />
    </CartReducer>
  );
}

export default App;
