import React, { useEffect, useState } from 'react';
import ListItem from '../../componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';

const Home = ({ selectedCategory }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
      });
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

