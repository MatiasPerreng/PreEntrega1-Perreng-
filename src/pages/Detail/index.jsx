import React, { useEffect, useState } from 'react';
import ItemDetailContainer from '../../componentes/itemDetailContainer';
import { RotateLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import Rick from '../../images/Rick.jpeg';
import Morty from '../../images/Morty.jpeg';
import Summer from '../../images/Summer.jpeg';
import Beth from '../../images/Beth.jpeg';
import Jerry from '../../images/Jerry.jpeg';
import Birdperson from '../../images/Birdperson.jpeg';
import Squanchy from '../../images/Squanchy.jpeg';

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
        image: Rick,
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: Morty,
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        image: Summer,
      },
      {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        image: Beth,
      },
      {
        id: 5,
        name: 'Jerry Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: Jerry,
      },
      {
        id: 6,
        name: 'Birdperson',
        status: 'Alive',
        species: 'Alien',
        gender: 'Male',
        image: Birdperson,
      },
      {
        id: 7,
        name: 'Squanchy',
        status: 'Alive',
        species: 'Alien',
        gender: 'Male',
        image: Squanchy,
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
