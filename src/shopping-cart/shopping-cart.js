import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import { Outlet } from "react-router-dom"
import getProducts from './products/productManager';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    getDoc,
  } from 'firebase/firestore';

// Saves a new shopping cart to Cloud Firestore.
async function saveCart(shoppingCart) {
    // Add a new message entry to the Firebase database.
    try {
        if (getAuth().currentUser && shoppingCart) {
            const userID = await getAuth().currentUser.uid;
            const userRef = collection(getFirestore(), userID);
            await setDoc(doc(userRef, 'cart'), {
                cart: shoppingCart,
            });    
        }
    }
    catch(error) {
      console.error('Error saving shopping cart database', error);
    }
}
// Loads shopping cart history and listens for upcoming ones.
async function loadCart(setShoppingCart) {
    try {
        if (getAuth().currentUser) {
            const userID = await getAuth().currentUser.uid
            const cartRef = doc(getFirestore(), userID, 'cart');
            const cartSnap = await getDoc(cartRef);
            if (cartSnap.exists()) {
                const cartData = cartSnap.data().cart;
                setShoppingCart(cartData);
            } else {
                console.log("No previous shopping cart");
            }
        }
    }
    catch(error) {
      console.error('Error loading shopping cart database', error);
    }
}

function authUser() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(getAuth(), user => {
            if (user) {
                resolve(user);
            } else {
                reject('User is not logged in');
            }
        })
    })
}

export default function ShoppingCart() {
    const [products, setProducts] = useState(getProducts());
    const [shoppingCart, setShoppingCart] = useState([]);

    useEffect(() => {
        authUser().then((user) => {
            loadCart(setShoppingCart);
        }, (error) => {
        })
    }, [])

    useEffect(() => {
        saveCart(shoppingCart);
    }, [shoppingCart]);

    return (
        <div>
            <Navbar />
            <Outlet context={[shoppingCart, setShoppingCart, products]} />
        </div>
    );
}