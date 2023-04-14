import { useOutletContext } from "react-router-dom";

function buyProduct({ shoppingCart, setShoppingCart, product }) {
    if (!shoppingCart.includes(product)){
        const newShoppingCart = [...shoppingCart, product];
        setShoppingCart(newShoppingCart);
    }
}

function ProductTiles({ products, shoppingCart, setShoppingCart }) {
    const productTiles = products.map((product) => {
        return (
            <div className="cardContainer" data-testid={`inventory${product.key}`} key={product.key}>
                <img className='cardImage' src={product.img} alt='product'></img>
                <span className="tooltip">{product.name}
                    <span className="tooltiptext">{product.description}</span>
                </span>
                <span>{`$${product.price}`}</span>
                <button onClick={() => buyProduct({shoppingCart, setShoppingCart, product})}>Add to Cart</button>
            </div>
        );
    });
    return (
        <div className="gameboard">
            {productTiles}
        </div>
    );
}

export default function Storefront() {
    const [shoppingCart, setShoppingCart, products] = useOutletContext();
    return (
        <div>
            <ProductTiles products={products} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
        </div>
    );
}