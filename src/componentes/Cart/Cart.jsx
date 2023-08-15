import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

const Cart = () => {
    const { cart, clear, total } = useContext(CartContext);

    return (
        <div className="container mt-5">
            {cart.length ? (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <p className="h5">Total a pagar: ${total()}</p>
                        <div>
                            <button className="btn btn-danger" onClick={clear}>
                                Vaciar Carrito
                            </button>
                            <Link to="/" className="btn btn-dark ms-2">
                                Terminar compra
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h3>Tu carrito está vacío</h3>
                    <Link to="/" className="btn btn-success">
                        Ir a comprar
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;