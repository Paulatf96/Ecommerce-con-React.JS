import styles from "./ItemStyles.css"
import {Link} from "react-router-dom"
export const Item = ({ product }) => {
    return ( 
    <div className="itemContainer">
        <div className="imgContainer">
            <img className="itemImg" src={product.img}/>
        
                <Link className="buttonSee" to={`/item/${product.id}`}>
                    <img src="/src/assets/eye-regular.svg" width={20} height={20}/>
                </Link>

        </div>
        <div className="itemInfo">
            <span className="itemTitle">{product.nombre}</span>
            <span className="itemPrice"><strong>{product.precio}</strong></span>
        </div>
    </div>
    )
}
    