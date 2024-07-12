import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { CartContext } from "../Context/CartContext";
import { ItemCount } from "./ItemCount";
import { BuyerForm } from "./BuyerForm";
import "./ItemDetailStyles.css";

const clearbuyer = { name: "", phone: "", email: "" };
export const CartList = () => {
  const { removeItem, limpiarCarrito, items, addItem } =
    useContext(CartContext);
  const [buyer, setBuyer] = useState(clearbuyer);
  const [buying, setBuying] = useState(false);
  const [validation, setValidation] = useState(false);
  const [nameValidator, setNameValidator] = useState(true);
  const [phoneValidator, setPhoneValidator] = useState(true);
  const [emailValidator, setEmailValidator] = useState(true);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(buyer.email);
    const isNameValid = /^[A-Za-z ]{2,}$/.test(buyer.name.trim());
    const isPhoneValid = /^[0-9]{7,}$/.test(buyer.phone.trim());
    console.log("phone", isPhoneValid, value);
    if (isNameValid) {
      setNameValidator(false);
    }

    if (isPhoneValid) {
      setPhoneValidator(false);
      console.log(phoneValidator);
    }

    if (isEmailValid) {
      console.log("entro a email");
      setEmailValidator(false);
    }
    if (isNameValid && isPhoneValid && isEmailValid) {
      setValidation(true);
    }
  };
  const handledSendOrder = (e) => {
    e.preventDefault();

    const order = { buyer, items, total };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          Swal.fire("Hemos recibido tu pedido con id: " + id);
        }
      })
      .finally(() => {
        limpiarCarrito();
        setValidation(false);
        setBuyer(clearbuyer);
        setVisible(false);
        setBuying(false);
      });
  };

  const RenderInCart = () => {
    if (items.length && !buying) {
      return (
        <div className="max-w-6xl">
          {items.map((item) => (
            <div className="flex justify-between m-10" key={item.id}>
              <div>
                <img
                  className="w-60 h-60 object object-cover "
                  src={item.img}
                />
              </div>
              <div className="flex flex-col">
                <p className="flex-auto">{item.nombre}</p>
                <p className="flex-auto">${item.precio}</p>
                <p className="flex-auto">Und:{item.quantity}</p>
                <ItemCount
                  stock={item.stock}
                  addFunction={() => addFunction(item)}
                  decreaseFunction={() => decreaseFunction(item)}
                  showAddButton={false}
                  initial={item.quantity}
                  addDirectly={true}
                  classType={false}
                ></ItemCount>
              </div>
              <img
                className="cursor-pointer"
                src="/src/assets/trash-icon.svg"
                onClick={() => removeItem(item.id)}
              />
            </div>
          ))}
          <div className="m-10">
            <p>
              <strong>Total:</strong> ${total}
            </p>
            <div className="flex justify-end m-10">
              <button className="mx-10" onClick={() => limpiarCarrito()}>
                Limpiar carrito
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setBuying(true)}
              >
                Ir a compra
              </button>
            </div>
          </div>
        </div>
      );
    } else if (buying) {
      return (
        <BuyerForm
          handledChange={handledChange}
          setBuying={setBuying}
          validation={validation}
          handledSendOrder={handledSendOrder}
          total={total}
          buyer={buyer}
          nameValidator={nameValidator}
          phoneValidator={phoneValidator}
          emailValidator={emailValidator}
        />
      );
    } else {
      return <p className="m-10">No tienes productos en el carrito</p>;
    }
  };

  return RenderInCart();
};
