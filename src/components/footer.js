import { Link } from "react-router-dom";
import Profile from "./profile";
export default function Footer() {
    return (
        <div className="footer">
            <Link to={'/'}>Home</Link>
            <Profile />
        </div>
    );
}