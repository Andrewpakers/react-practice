import { useState } from 'react';
import Navbar from './components/navbar';
import { Outlet } from "react-router-dom"
import getProducts from './products/productManager';


export default function ShoppingCart() {
    const [products, setProducts] = useState(getProducts());
    const [shoppingCart, setShoppingCart] = useState([]);   
    return (
        <div>
            <Navbar />
            <Outlet context={[shoppingCart, setShoppingCart, products]} />
        </div>
    );
}