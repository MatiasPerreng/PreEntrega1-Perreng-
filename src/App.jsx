
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Home from './pages/Home';
import NavBarContainer from './componentes/Navbar';
import Detail from './pages/Detail';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyAcFS0sYuXKBy7dI8fr95-DdmD1-d1Wcx4",
  authDomain: "miproyectoperreng.firebaseapp.com",
  projectId: "miproyectoperreng",
  storageBucket: "miproyectoperreng.appspot.com",
  messagingSenderId: "597161764110",
  appId: "1:597161764110:web:be571a411e215f20b1235f",
  measurementId: "G-XKS7Z9V1DY"
};

initializeApp(firebaseConfig);



const App = () => {

  useEffect(() => {
    const db = getFirestore();
    const products = doc(db, 'products', 'Zw2AgtWCeQTLtfkLWieV');
    getDoc(products)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log('snapshot: ', snapshot.data())
        }
      })
      .catch((error) => {
        console.log('error: ', error)
      })

  }, [])

  return (

    <CartProvider>

      <BrowserRouter>

        <NavBarContainer
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>

      </BrowserRouter>

    </CartProvider>
  );

};



export default App;