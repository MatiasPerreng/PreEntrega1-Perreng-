import { initializeApp } from "firebase/app";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBarContainer from './componentes/Navbar';
import Detail from './pages/Detail';
import { CartProvider } from './context/CartContext';
import FirestoreProvider from "./context/FirestoreContext";
import Cart from './componentes/Cart/Cart';


const firebaseConfig = {
  apiKey: "AIzaSyCO7Hsvasj7waNBATAbjFTTE3QpQlkQ4Nw",
  authDomain: "proyectofinal-e6a17.firebaseapp.com",
  projectId: "proyectofinal-e6a17",
  storageBucket: "proyectofinal-e6a17.appspot.com",
  messagingSenderId: "66903800873",
  appId: "1:66903800873:web:8c53dee2d451b2c35ab038",
  measurementId: "G-9JGYJRZFY8"
};
initializeApp(firebaseConfig);


const App = () => {

  return (
    <FirestoreProvider>
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
    </FirestoreProvider>
  );

};



export default App;