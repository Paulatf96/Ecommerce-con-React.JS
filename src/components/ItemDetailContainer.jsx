import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { ItemDetail } from "./ItemDetail";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
  const { addItem } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          Swal.fire({
            title: "Error!",
            text: "El producto no existe",
            icon: "error",
          });

          setTimeout(() => {
            window.location.replace("/");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [id]);

  const addFunction = (counter) => {
    addItem(product, counter);
  };

  return product ? (
    <ItemDetail product={product} addFunction={addFunction} />
  ) : (
    <span> Estamos cargando el producto... </span>
  );
};
