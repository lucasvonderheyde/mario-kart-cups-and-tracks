import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/cups" activeClassName="active">Cups</NavLink></li>
                <li><NavLink to="/tracks" activeClassName="active">All Tracks</NavLink></li>
            </ul>
        </nav>
    );
}
