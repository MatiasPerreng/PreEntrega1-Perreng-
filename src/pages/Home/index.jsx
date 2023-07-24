import React from 'react';
import ListItem from '../../componentes/ItemListContainer';
import NavBar from './componentes/Navbar';
import { useEffect, useState } from 'react';

function Home(){

  const categories = ['Human', 'Alien', 'All'];
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


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <NavBar
        child1={<img src={reactLogo} alt="React Logo" />}
        data={categories}
        onCategoryChange={handleCategoryChange}
      />

      <ListItem
        greetings={'Bievenidos a mi segunda entrega Coders'}
        data={characters}
        selectedCategory={selectedCategory}
      />
    </>
  );


}

export default Home;
