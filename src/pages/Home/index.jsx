import React, { useContext, useEffect } from 'react';
import ListItem from '../../componentes/ItemListContainer';
import { useParams } from 'react-router-dom';
import { FirestoreContext } from '../../context/FirestoreContext';

const Home = () => {
    const { category } = useParams();
    const { characters, getProductsByCategory, getAllProducts } = useContext(FirestoreContext);

    useEffect(() => {
        if (category) {
            getProductsByCategory(category);
        } else {
            getAllProducts();
        }
    }, [category, getProductsByCategory, getAllProducts]);

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
