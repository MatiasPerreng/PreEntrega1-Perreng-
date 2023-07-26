
import React, { useState } from 'react';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = ({ character }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = (quantity) => {
    setCartCount((prevCount) => prevCount + quantity);
  };

  return (
    <div>
      <ItemDetail
        character={character}
        quantity={quantity}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ItemDetailContainer;
