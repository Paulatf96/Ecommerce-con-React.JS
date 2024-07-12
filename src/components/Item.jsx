import { Link } from "react-router-dom";
import Eye from "../assets/eye-regular.svg";
import "./ItemStyles.css";
export const Item = ({ product }) => {
  return (
    <div className="itemContainer">
      <div className="imgContainer">
        <img className="itemImg" src={product.img} />

        <Link className="buttonSee" to={`/item/${product.id}`}>
          <img src={Eye} width={20} height={20} />
        </Link>
      </div>
      <div className="itemInfo">
        <span className="itemTitle">{product.nombre}</span>
        <span className="itemPrice">
          <strong>{product.precio}</strong>
        </span>
      </div>
    </div>
  );
};
