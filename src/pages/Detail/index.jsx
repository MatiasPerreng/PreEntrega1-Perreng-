import React, { useEffect, useState } from 'react';
import ItemDetailContainer from '../../componentes/itemDetailContainer';
import { RotateLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const charactersData = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      },
      {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      },
      {
        id: 5,
        name: 'Jerry Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      },
      {
        id: 6,
        name: 'Birdperson',
        status: 'Alive',
        species: 'Alien',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
      },
      {
        id: 7,
        name: 'Squanchy',
        status: 'Alive',
        species: 'Alien',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/72.jpeg',
      },

    ];

    const characterData = charactersData.find(
      (char) => char.id === parseInt(id)
    );

    setTimeout(() => {
      setCharacter(characterData);
    }, 1000);
  }, [id]);

  if (!character) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RotateLoader
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
    </div>;
  }

  return (
    <div>
      <ItemDetailContainer character={character} />
    </div>
  );
};

export default Detail;
