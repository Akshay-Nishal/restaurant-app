import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [showCart,setShowCart] = useState(false)
  const changeCartShow =()=>{
    setShowCart(!showCart)
  }
  return (
    <>
      <Cart show={showCart} changeCartShow={changeCartShow}/>
      <Header changeCartShow={changeCartShow}/>
      <Meals/>
    </>
  );
}

export default App;
