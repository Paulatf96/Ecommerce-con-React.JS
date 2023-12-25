import { ItemCount } from "./ItemCount";
import { ItemDetailAccordion } from "./ItemDetailAccordion";


export const ItemDetail = ({ product, addFunction }) => {
  return (
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
        <ItemCount
          stock={product.stock}
          addFunction={addFunction}
        ></ItemCount>

        <div><ItemDetailAccordion/></div>
      </div>
    </div>
  );
};
