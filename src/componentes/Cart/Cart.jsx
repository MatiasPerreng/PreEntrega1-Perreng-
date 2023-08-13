import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, clear, total } = useContext(CartContext)
    return (
        <div>
            {cart.length
                ? <p>mapear el carrito</p>
                : <div>
                    <h3>Tu carrito está vacio</h3>
                    <link to='/' className="btn btn-success">Ir a comprar</link>
                </div>}
        </div>
    )
}

export default Cart