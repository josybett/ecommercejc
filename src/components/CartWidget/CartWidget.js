import cart from './asset/cart.svg'

const CartWidget = () => {
    return (
        <a>
            <img src={cart} alt="carrito de compra"/>
            <span>0</span>
        </a>
    )
}

export default CartWidget