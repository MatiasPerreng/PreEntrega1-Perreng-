import React, { createContext, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export const FirestoreContext = createContext();

export default function FirestoreProvider({ children }) {
    const [characters, setCharacters] = useState([]);
    const db = getFirestore();

    function getAllProducts() {
        const productCollection = collection(db, 'productos');
        getDocs(productCollection)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((product) => ({
                    id: product.id,
                    ...product.data()
                }));
                setCharacters(productsData);
            });
    }

    function getProductsByCategory(category) {
        const q = query(collection(db, 'productos'), where('category', '==', category));
        getDocs(q)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((product) => ({
                    id: product.id,
                    ...product.data()
                }));
                setCharacters(productsData);
            });
    }

    return (
        <FirestoreContext.Provider value={{
            getAllProducts,
            getProductsByCategory,
            characters
        }}>
            {children}
        </FirestoreContext.Provider>
    );
}
