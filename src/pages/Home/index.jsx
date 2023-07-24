import React, { useEffect, useState } from 'react';
import NavBar from '../../componentes/Navbar';
import ListItem from '../../componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import reactLogo from '../../assets/react.svg';

const Home = () => {
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
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <>
      <NavBar
        child1={<img src={reactLogo} alt="React Logo" />}
        data={categories}
        onCategoryChange={handleCategoryChange}
      />

      <ListItem
        greetings={'Bienvenidos a mi segunda entrega Coders'}
        data={characters}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default Home;
