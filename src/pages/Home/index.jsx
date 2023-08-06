import React, { useEffect, useState } from 'react';
import ListItem from '../../componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import Rick from '../../images/Rick.jpeg';
import Morty from '../../images/Morty.jpeg';
import Summer from '../../images/Summer.jpeg';
import Beth from '../../images/Beth.jpeg';
import Jerry from '../../images/Jerry.jpeg';
import Birdperson from '../../images/Birdperson.jpeg';
import Squanchy from '../../images/Squanchy.jpeg';

const Home = ({ selectedCategory }) => {
  const [characters, setCharacters] = useState([]);

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

    
    setTimeout(() => {
      setCharacters(charactersData);
    }, 1000);
  }, []);

  return (
    <>
      <ListItem
        greetings={'Bienvenidos a mi segunda entrega Coders'}
        data={characters}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default Home;
