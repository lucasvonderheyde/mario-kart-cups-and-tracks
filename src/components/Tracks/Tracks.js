import { Link } from "react-router-dom"
import "./Tracks.css"

export default function Tracks({ name, image, id }){

    const trackId = `/tracks/${id}`

    return (
        <div className="track">
            <Link to={trackId} >
                <img className="track-image" src={image}  />
            </Link>
        </div>
    )
}