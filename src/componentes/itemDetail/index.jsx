import React, { useContext, useState } from 'react';
import { FirestoreContext } from '../../context/FirestoreContext';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ character }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(FirestoreContext);
  const { addItem } = useContext(CartContext);

  const onIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const onDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const onAddToCart = () => {
    const subtotal = character.price * quantity;
    addProductToCart(character, quantity, subtotal);
    addItem(character, quantity);
    console.log('Producto añadido al carrito:', character, 'Cantidad:', quantity);
  };

  return (
    <div className="detail card text-center" style={{ maxWidth: '270px', margin: '0 auto', marginTop: '50px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', marginTop: '20px' }}>Detalles del personaje</h2>
      <img
        src={character.image}
        alt={character.name}
        className="detail-image card-img-top mx-auto"
        style={{ width: '220px', height: '200px' }}
      />
      <div className="card-body">
        <h3 className="detail-title card-title">{character.name}</h3>
        <h6 className="detail-title card-title">{character.species}</h6>
        <div className="item-quantity form-group">
          <label htmlFor="quantity-input" className="text-center">
            Cantidad:
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <button onClick={onDecreaseQuantity} className="quantity-button btn btn-secondary">-</button>
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
              <button onClick={onIncreaseQuantity} className="quantity-button btn btn-secondary">+</button>
            </div>
          </div>
        </div>
        <button onClick={onAddToCart} className="btn btn-success" style={{ marginTop: '20px' }}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
