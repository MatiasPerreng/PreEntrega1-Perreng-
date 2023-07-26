
import React from 'react';
import ItemDetailContainer from '../../componentes/itemDetailContainer';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  return (
    <div>
      <ItemDetailContainer character={character} />
    </div>
  );
};

export default Detail;
