import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemContainer from '../itemsOfContainer';

function ListItem(props) {

  console.log("PERSONAJES: ", props.data);

  function renderCharacters() {
    return props.data.map((character) => (
      <ItemContainer
        key={character.id} 
        character={character} 
      />
    ));
  }

  return (
    <div className='list__container'>
      <h1>Buenos días</h1>
      {renderCharacters()}
    </div>
  );
}

export default ListItem;

