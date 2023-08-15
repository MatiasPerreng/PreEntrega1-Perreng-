import React from "react";

const CartItem = ({ item }) => {
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
            <img src={item.image} alt={item.name} className="img-thumbnail" style={{ maxWidth: "100px" }} />
            <div>
                <p className="mb-0">{item.name}</p>
                <p className="text-muted">{item.gender}</p>
                <p className="mb-0">Cantidad: ${item.quantity}</p>
                <p className="mb-0">Precio: ${item.price}</p>
         
            </div>
        </div>
    );
};

export default CartItem;
