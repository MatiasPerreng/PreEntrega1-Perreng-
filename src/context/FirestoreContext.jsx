import React, { createContext, useState } from 'react';
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore';

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
        const q = query(collection(db, 'productos'), where('species', '==', category));
        getDocs(q)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((product) => ({
                    id: product.id,
                    ...product.data()
                }));
                setCharacters(productsData);
            });
    }

    function addProductToCart(product, quantity, subtotal) {
        const itemToCart = {
            user: {
                name: 'Matias',
                surname: 'Perreng'
            },
            item: [
                {
                    ...product,
                    quantity,
                    subtotal
                }
            ]
        }

        const OrdersCollection = collection(db, 'orders');
        addDoc(OrdersCollection, itemToCart)
            .then((order) => {
                console.log('order: ', order)
            })
    }


    return (
        <FirestoreContext.Provider value={{
            addProductToCart,
            getAllProducts,
            getProductsByCategory,
            characters
        }}>
            {children}
        </FirestoreContext.Provider>
    );
}
