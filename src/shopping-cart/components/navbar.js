import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="title">
                <h1>FakeStore</h1>
                <span>The best place to fake buy fake things!</span>
            </div>
            <div className="navigation">
                <Link to={`/shopping-cart`}>Home</Link>
                <Link to={"/shopping-cart/cart"}>Cart</Link>
            </div>
        </div>
    );
}