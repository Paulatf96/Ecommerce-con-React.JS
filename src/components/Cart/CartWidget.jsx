import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cart from "/src/assets/cart.png";
import { CartContext } from "../../Context/CartContext";
import { SidebarCart } from "../sidebar/SidebarCart";
import { CartList } from "./CartList";

export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div  id="cart-container">
        <img src={cart} alt="icono carro" onClick={()=>setVisible(!visible)}/>
        <span >{items.length}</span>
      </div>
      <SidebarCart visible={visible} setVisible={setVisible}>
        <CartList setVisible={setVisible}/>
      </SidebarCart>
    </>
  );
};
