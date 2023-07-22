import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


function ItemContainer(props) {

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
        <div className="item-quantity form-group">
        </div>
        
      </div>
    </div>
  );
}

export default ItemContainer;

