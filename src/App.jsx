import { useEffect, useState } from 'react';
import NavBar from './componentes/Navbar';
import NavElements from './componentes/NavElements';
import ListItem from './componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import reactLogo from './assets/react.svg';


function App() {

  const categories = ['Human', 'Alien', 'Other'];

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
      <NavBar
        child1={<img src={reactLogo} alt="React Logo" />}
        data={categories}
      />

      <ListItem
        greetings={'Bievenidos a mi segunda entrega Coders'}
        data={characters} />

    </>
  );
}

export default App;

