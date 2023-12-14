import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";
import { ButtonCounter } from "../ButtonCounter";
import styles from "../ItemDetail/./ItemDetailStyles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const clearbuyer = { name: "", phone: "", email: "" };
export const CartList = () => {
  const { removeItem, limpiarCarrito, items, addItem } =
    useContext(CartContext);
  const [buyer, setBuyer] = useState(clearbuyer);
  const [buying, setBuying] = useState(false);

  console.log(items);

  const total = items.reduce((acumulado, actual) => {
    return acumulado + actual.precio * actual.quantity;
  }, 0);

  const addFunction = (product) => {
    addItem(product, 1);
  };

  const decreaseFunction = (product) => {
    addItem(product, -1);
  };

  const handledChange = (event) => {
    const { name, value } = event.target;
    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handledSendOrder = () => {
    const order = { buyer, items, total };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        Swal.fire("Hemos recibido tu pedido con id: " + id);
        limpiarCarrito();
        setBuyer(clearValues);
      }
    });
  };

  const BuyerForm = () => {
    return (
      <form className="flex flex-col">
        <p>Ingresa tus datos para terminar la compra...</p>
        <div className="flex-auto my-2">
          <label className="w-20">Nombre:</label>
          <input
            name="name"
            type="text"
            value={buyer.name}
            onChange={handledChange}
            required
          />
        </div>
        <div className="flex-auto my-2">
          <label className="w-20">Teléfono:</label>
          <input
            name="phone"
            type="text"
            value={buyer.phone}
            onChange={handledChange}
            required
          />
        </div>
        <div className="flex-auto my-2">
          <label className="w-20">Email:</label>
          <input
            name="email"
            type="email"
            value={buyer.email}
            onChange={handledChange}
            required
          />
        </div>
        <p>
          <strong>Total:</strong> ${total}
        </p>
        <div className="flex justify-between my-4">
          <button onClick={() => setBuying(false)}>Volver atrás</button>
          <button className="btn btn-danger" onClick={handledSendOrder}>
            Comprar
          </button>
        </div>
      </form>
    );
  };

  const CartContent = () => {
    return (
      <>
        {items.map((item) => (
          <div className="flex justify-between my-4 " key={item.id}>
            <div>
              <img className="w-20 h-20 object object-cover " src={item.img} />
            </div>
            <div className="flex flex-col">
              <p className="flex-auto">{item.nombre}</p>
              <p className="flex-auto">${item.precio}</p>
              <p className="flex-auto">Und:{item.quantity}</p>
              <ButtonCounter
                stock={item.stock}
                addFunction={() => addFunction(item)}
                decreaseFunction={() => decreaseFunction(item)}
                showAddButton={false}
                initial={item.quantity}
                addDirectly={true}
                classType={false}
              ></ButtonCounter>
            </div>
            <img
              className="cursor-pointer"
              src="/src/assets/trash-icon.svg"
              onClick={() => removeItem(item.id)}
            />
          </div>
        ))}
        <div>
          <p>
            <strong>Total:</strong> ${total}
          </p>
          <div className="flex justify-between">
            <button onClick={() => limpiarCarrito()}>Limpiar carrito</button>
            <button className="btn btn-danger" onClick={() => setBuying(true)}>
              Ir a compra
            </button>
          </div>
        </div>
      </>
    );
  };

  const RenderInCart = () => {
    if (items.length && !buying) {
      return <CartContent />;
    } else if (buying) {
      return BuyerForm();
    } else {
      return <p>No tienes productos en el carrito</p>;
    }
  };

  return RenderInCart();
};
