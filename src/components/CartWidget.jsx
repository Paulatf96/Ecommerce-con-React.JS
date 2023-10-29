import cart from "../assets/cart.png"

export const CartWidget =  () => {
    return <div id="cart-container"><img src={cart} alt="icono carro" />
    <span>0</span></div>
}