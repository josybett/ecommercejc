import { useContext } from 'react'
import cart from './asset/cart.svg'
import { CardContext } from '../../context/cardContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { items } = useContext( CardContext );

    return (
        <Link to="/checkout">
            <img src={cart} alt="carrito de compra"/>
            <span>{items.length}</span>
        </Link>
    )
}

export default CartWidget