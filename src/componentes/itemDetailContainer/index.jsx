import React from 'react';
import ItemDetail from '../itemDetail';

const ItemDetailContainer = ({ character }) => {
  return (
    <div>
      <ItemDetail character={character} />
    </div>
  );
};

export default ItemDetailContainer;
