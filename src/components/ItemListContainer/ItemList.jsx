import {Item} from "./Item"
export const ItemList = ({products}) => {
    return (
        <div id="productsContainer">
            {products.map((product => 
            <Item key={product.id} product={product}/> 
            ))}
        </div>

    )
}