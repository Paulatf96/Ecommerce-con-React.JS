import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import cart from "/src/assets/cart.png";

export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div id="cart-container">
        <Link to={"/cart"}>
          <img
            src={cart}
            alt="icono carro"
            onClick={() => setVisible(!visible)}
          />
        </Link>
        <span>{items.length}</span>
      </div>
    </>
  );
};
