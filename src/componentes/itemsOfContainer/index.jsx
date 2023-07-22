import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'; 

function ItemContainer(props) {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const character = props.character;

  return (
    <div className="item card text-center">
      <img
        src={character.image}
        alt={character.name}
        className="item-image card-img-top mx-auto"
        height={100}
        width={100}
      />
      <div className="card-body d-flex flex-column justify-content-center">
        <h3 className="item-title card-title">{character.name}</h3>
        <h6 className="item-title card-title">{character.species}</h6>
        <div className="item-quantity form-group">
          <label htmlFor="quantity-input" className="text-center">
            Cantidad:
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <button onClick={handleDecreaseQuantity} className="quantity-button btn btn-secondary">-</button>
            </div>
            <input
              type="number"
              id="quantity-input"
              className="form-control quantity-input"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <div className="input-group-append">
              <button onClick={handleIncreaseQuantity} className="quantity-button btn btn-secondary">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;
