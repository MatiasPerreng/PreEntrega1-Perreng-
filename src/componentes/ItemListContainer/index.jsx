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
    <div className='list__container row'>
      <h1 style={{ color: 'black', fontSize: '24px', textAlign: 'center', marginTop: '25px' }}>{props.greetings}</h1>
      {renderCharacters()}
    </div>
  );
}

export default ListItem;

