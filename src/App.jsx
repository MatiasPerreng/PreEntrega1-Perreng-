
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBarContainer from './componentes/Navbar';
import Detail from './pages/Detail';



const App = () => {

  return (

    <BrowserRouter>

      <NavBarContainer
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

    </BrowserRouter>

  );

};



export default App;