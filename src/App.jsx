import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBarContainer from './pages/NavbarContainer';


const App = () => {

  return (
    <BrowserRouter>

      <NavBarContainer/>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;

