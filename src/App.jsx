// App.js
import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBarContainer from './componentes/Navbar';
import Detail from './pages/Detail';

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);


  return (
    <BrowserRouter>
      <NavBarContainer
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <Routes>
        <Route path="/" element={<Home selectedCategory={selectedCategory} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
