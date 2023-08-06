import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemContainer from '../itemsOfContainer';

function ListItem(props) {

  const { data } = props;

  console.log("PERSONAJES: ", data);

  function renderCharacters() {
    return data.map((character) => (
      <ItemContainer
        key={character.id}
        character={character}

      />
    ));

  }
  return (

    <div className='list__container row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ color: 'black', fontSize: '24px', textAlign: 'center', marginTop: '25px' }}>{props.greetings}</h1>
      {renderCharacters()}

    </div>

  );

}



export default ListItem;

