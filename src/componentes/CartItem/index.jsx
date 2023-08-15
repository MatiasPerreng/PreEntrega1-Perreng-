import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { deleteItem } = useContext(CartContext);

    const calcularSubtotal = () => {
        return item.price * item.quantity;
    };

    return (
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
            <img src={item.image} alt={item.name} className="img-thumbnail" style={{ maxWidth: "100px" }} />
            <div className="flex-grow-1 d-flex flex-column align-items-center">
                <p className="mb-0">{item.name}</p>
                <p className="text-muted">{item.gender}</p>
                <p className="mb-0">Cantidad: {item.quantity}</p>
                <p className="mb-0">Precio: ${item.price}</p>
            </div>
            <div className="d-flex flex-column align-items-end">
                <p className="mb-0">Subtotal: ${calcularSubtotal()}</p>
                <button onClick={() => deleteItem(item.id)} className="btn btn-danger mt-2">Borrar Item</button>
            </div>
        </div>
    );
};

export default CartItem;
