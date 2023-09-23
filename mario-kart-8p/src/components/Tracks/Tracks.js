import { Link } from "react-router-dom"
import "./Tracks.css"

export default function Tracks({ name, image, id }){

    return (
        <div className="track">
            <Link to="/tracks-page" >
                <img className="track-image" src={image}  />
            </Link>
        </div>
    )
}