import React, { useEffect, useState } from 'react';
import ListItem from '../../componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import Rick from '../../images/Rick.jpeg';
import Morty from '../../images/Morty.jpeg';
import Summer from '../../images/Summer.jpeg';
import Beth from '../../images/Beth.jpeg';
import Jerry from '../../images/Jerry.jpeg';
import Birdperson from '../../images/Birdperson.jpeg';
import Squanchy from '../../images/Squanchy.jpeg';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    // Creamos una función para simular la solicitud asíncrona
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
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
          resolve(charactersData);
        }, 50); 
      });
    };

    fetchData()
      .then((data) => {
        if (category) {
          const filteredCharacters = data.filter(
            (personaje) => personaje.species === category
          );
          setCharacters(filteredCharacters);
        } else {
          setCharacters(data);
        }
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
      });
  }, [category]);

  return (
    <>
      <ListItem
        greetings={'Bienvenidos a mi segunda entrega Coders'}
        data={characters}
        selectedCategory={category}
      />
    </>
  );
};

export default Home;
