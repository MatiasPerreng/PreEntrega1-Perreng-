import { useState } from 'react';
import NavBar from './componentes/Navbar';
import NavElements from './componentes/NavElements';
import ListContainer from './componentes/ItemListContainer';
import ItemContainer from './componentes/itemsOfContainer';
import 'bootstrap/dist/css/bootstrap.css';
import reactLogo from './assets/react.svg';
import banana from './imagenes/banana.webp'
import manzana from './imagenes/manzana.webp'
import naranja from './imagenes/Naranja.webp'
import mandarina from './imagenes/Mandarina.jpg'
import tomate from './imagenes/Tomate.webp'
import uvas from './imagenes/Uvas.jpg'

function App() {
  return (
    <>
      <NavBar

        child1={<img src={reactLogo} alt="React Logo" />}
        child2={<NavElements value="Inicio" />}
        child3={<NavElements value="Tienda" />}
        child4={<NavElements value="Contacto" />}
      />


      <ListContainer greetings="Bienvenidos a mi primera entrega CODERS">
        <ItemContainer value="Manzanas" img={manzana} />
        <ItemContainer value="Bananas" img={banana} />
        <ItemContainer value="Naranjas" img={naranja} />
        <ItemContainer value="Uvas" img={uvas} />
        <ItemContainer value="Mandarinas" img={mandarina} />
        <ItemContainer value="Tomates" img={tomate} />
      </ListContainer>
    </>
  );
}

export default App;

