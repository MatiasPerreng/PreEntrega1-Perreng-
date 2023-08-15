import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

const Cart = () => {
    const { cart, clear, total } = useContext(CartContext)
    return (
        <div>
            {cart.length
                ? <div>
                    {cart.map((item) => <CartItem key={item.id} item={item} />)}
                    <p>total a pagar: ${total()}</p>
                    <div>
                        <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
                        <Link className='btn btn-dark'>Terminar compra</Link>
                    </div>
                </div>
                : <div>
                    <h3>Tu carrito está vacio</h3>
                    <link to='/' className="btn btn-success">Ir a comprar</link>
                </div>}
        </div>
    )
}

export default Cart