import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBarContainer from './componentes/Navbar';
import Detail from './pages/Detail';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart';

const App = () => {

  return (

    <CartProvider>

      <BrowserRouter>

        <NavBarContainer
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </BrowserRouter>

    </CartProvider>
  );

};



export default App;