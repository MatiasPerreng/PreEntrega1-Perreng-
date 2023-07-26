

import React, { useState } from 'react';
import ItemDetail from '../itemDetail';

const ItemDetailContainer = ({ character }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <ItemDetail
      character={character}
      quantity={quantity}
      onIncreaseQuantity={handleIncreaseQuantity}
      onDecreaseQuantity={handleDecreaseQuantity}
    />
  );
};

export default ItemDetailContainer;
