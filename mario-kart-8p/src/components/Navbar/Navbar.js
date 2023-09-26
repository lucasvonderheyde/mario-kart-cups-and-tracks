import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cups">Cups</Link></li>
            <li><Link to="/tracks">All Tracks</Link></li>
         </ul>
        </nav>
    );
}
