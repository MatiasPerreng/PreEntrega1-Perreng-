import React, { useEffect, useState } from 'react';
import ListItem from '../../componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
