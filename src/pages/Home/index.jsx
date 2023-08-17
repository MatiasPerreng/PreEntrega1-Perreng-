import React, { useEffect, useState } from 'react';
import ListItem from '../../componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


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

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const charactersCollection = collection(db, 'productos');

    let charactersQuery;
    if (category) {
      charactersQuery = query(charactersCollection, where('species', '==', category));
    } else {
      charactersQuery = charactersCollection;
    }

    getDocs(charactersQuery)
      .then((querySnapshot) => {
        const charactersData = querySnapshot.docs.map((doc) => doc.data());
        setCharacters(charactersData);
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
      });
  }, [category]);

  return (
    <>
      <ListItem
        greetings={'Bienvenidos a mi segunda entrega Coders'}
        data={characters}
        selectedCategory={category}
      />
    </>
  );
};

export default Home;