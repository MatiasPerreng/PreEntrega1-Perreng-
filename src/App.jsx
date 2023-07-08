import { useState } from 'react';
import NavBar from './componentes/Navbar';
import NavElements from './componentes/NavElements';
import ListContainer from './componentes/ItemListContainer';
import ItemContainer from './componentes/itemsOfContainer';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  return (
    <>
      <NavBar>
        <NavElements value="Inicio" />
        <NavElements value="Hola Coders" />
        <NavElements value="Sobre Nosotros" />
      </NavBar>
      <ListContainer>
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
      </ListContainer>
    </>
  )


}

export default App
