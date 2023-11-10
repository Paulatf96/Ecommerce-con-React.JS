export const Item = ({ product }) => {
    
    return ( 
    <>
        <p>{product.nombre} Hola</p>
        <img  src={product.img}/>
    </>
    )
}
    