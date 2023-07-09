import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


function ItemContainer(props) {
  return (
    <div className="item card text-center">
      <img 
        src={props.img}
        alt="Imagen del producto"
        className="item-image card-img-top mx-auto"
      />
      <div className="card-body d-flex flex-column justify-content-center">
        <h3 className="item-title card-title">{props.value}</h3>
        <div className="item-quantity form-group">
          <label htmlFor="quantity-input" className="text-center">
            Cantidad:
          </label>
          <input
            type="number"
            id="quantity-input"
            className="quantity-input form-control mx-auto"
            min="1"
            defaultValue="1"
          />
        </div>
        <button className="add-to-cart-button btn btn-primary mx-auto">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemContainer;
