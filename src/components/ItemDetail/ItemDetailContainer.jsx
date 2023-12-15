import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./ItemDetailStyles.css";
import { CartContext } from "../../Context/CartContext";
import { ButtonCounter } from "../ButtonCounter";
import Swal from "sweetalert2";

function InfoAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cuidado de tus joyas</Accordion.Header>
        <Accordion.Body>
          Cuida tus accesorios y alarga su vida, estos tips te ayudarán a
          lograrlo:
          <ul>
            <li>
              Evita el contacto con perfumes, sprays o cualquier otro químico
              fuerte.
            </li>
            <li>Guárdalos siempre por separado.</li>
            <li>
              Lávalos con jabón suave y agua, y asegúrate de secarlos muy bien.
            </li>
            <li>
              Evita usarlos al hacer ejercicio o en momentos donde la sudoración
              pueda ser mayor.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Información de envío</Accordion.Header>
        <Accordion.Body>
          <p>
            <strong>TIEMPOS ESTIMADOS DE ENTREGA</strong>
          </p>
          <ul>
            <li>Ciudades principales: de 2 a 5 días hábiles</li>
            <li>
              Poblaciones intermedias y municipios: de 3 a 10 días hábiles
            </li>
          </ul>
          <p>
            <strong>TARIFAS </strong>
          </p>
          <ul>
            <li>
              Envío a Colombia* $9.000 o GRATIS por compras superiores a
              $110.000
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

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
          //alert("no encontramos el producto");
          Swal.fire({
            title: 'Error!',
            text: 'El producto no existe',
            icon: 'error',});

            setTimeout(() => {
              window.location.replace("/")
              
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
    <div className="containerItemDetail">
      <img src={product.img} />
      <div className="itemDetailInfo">
        <span className="itemDetailName">
          {product.categoria} {product.nombre}
        </span>
        <span>
          Precio: <strong>${product.precio}</strong>
        </span>
        <span>Categoria: {product.categoria}</span>
        <p>Envío gratis por compras superiores a $110.000</p>
        <ButtonCounter
          stock={product.stock}
          addFunction={addFunction}
        ></ButtonCounter>

        <div>{InfoAccordion()}</div>
      </div>
    </div>
  ) : (
    <span> Estamos cargando el producto... </span>
  );
};
