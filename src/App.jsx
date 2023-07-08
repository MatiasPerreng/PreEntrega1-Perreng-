import { useState } from 'react';
import NavBar from './componentes/Navbar';
import NavElements from './componentes/NavElements';
import ListContainer from './componentes/ItemListContainer';
import ItemContainer from './componentes/itemsOfContainer';
import CartWidget from './componentes/CartWidget';
import reactLogo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.css';




function App() {
  return (
    <>
      <NavBar

        child1={<img src={reactLogo} alt="React Logo" />}
        child2={<NavElements value="Inicio" />}
        child3={<NavElements value="Tienda" />}
        child4={<NavElements value="Contacto" />}

      />


      <ListContainer>
        <ItemContainer value="Manzana" />
        <ItemContainer value="Banana" />
        <ItemContainer value="Naranja" />
        <ItemContainer value="Sandía" />
        <ItemContainer value="Mandarina" />
        <ItemContainer value="Tomate" />
      </ListContainer>
    </>
  );
}

export default App;

