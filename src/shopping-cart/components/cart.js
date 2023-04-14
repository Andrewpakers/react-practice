import { useState } from "react";
import { useOutletContext } from "react-router-dom"

const deleteProduct = ( shoppingCart, setShoppingCart, productKey ) => {
    const newshoppingCart = shoppingCart.filter(product => product.key !== productKey);
    setShoppingCart(newshoppingCart);
}
const CreateshoppingCart = ({ shoppingCart, setShoppingCart }) => {
    if (shoppingCart) {
        const priceTotal = shoppingCart.reduce(
            (accumulator, currentValue) => accumulator + Number(currentValue.price),
            0
          );
        const productRows = shoppingCart.map((product) => {
            return (
                <tr key={product.key}>
                    <td className="tooltip">
                        {product.name}
                        <button type="button" onClick={() => deleteProduct(shoppingCart, setShoppingCart, product.key) } data-testid={product.key}>Remove</button>
                        <span className="tooltiptext">{product.description}</span>
                    </td>
                    <td>{`$${product.price}`}</td>
                </tr>
            );
        });
        return (
            <table className="productTable">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    {productRows}
                    <tr><td></td><td></td></tr>
                    <tr>
                        <td>Total</td>
                        <td data-testid="priceTotal">{`$${priceTotal}`}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
};

export default function Cart() {
    const [shoppingCart, setShoppingCart] = useOutletContext();
    
    return (
        <div className="cartContainer">
            <div className="contentContainerColumn">
                <CreateshoppingCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
            </div>
        </div>
    );
}