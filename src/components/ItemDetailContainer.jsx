import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import datos from "../../products.json";
import styles from "./ItemDetailStyles.css";

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
  const { id } = useParams();
  const products = datos;

  const findedProduct = products.find((product) => product.id == id);

  return (
    <div className="containerItemDetail">
      <img src={findedProduct.img} />
      <div className="itemDetailInfo">
        <span className="itemDetailName">{findedProduct.categoria} {findedProduct.nombre}</span>
        <span>
          Precio: <strong>{findedProduct.precio}</strong>
        </span>
        <span>Categoria: {findedProduct.categoria}</span>
        <p>Envío gratis por compras superiores a $110.000</p>
        <button className="itemDetailButton">Agregar al carrito</button>
        <div>{InfoAccordion()}</div>
      </div>
    </div>
  );
};
