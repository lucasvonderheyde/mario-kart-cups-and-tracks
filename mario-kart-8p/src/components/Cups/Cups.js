import { useState } from "react"
import Tracks from "../Tracks/Tracks"
import "./Cups.css"

export default function Cups({ name, image, alt_image, tracks }) {

    const [tracksRevealed, setTracksRevealed] = useState(true)

    const imageSrc = tracksRevealed ? image : alt_image
    const imageClassName = tracksRevealed ? "image" : "alt-image"

    function handleClick(){
        setTracksRevealed(previousValue => !previousValue)
    }


    return (
        <div className="cups">
            <img onClick={handleClick} src={imageSrc} className={imageClassName} />
            <h1 className="cup-title">{name}</h1>
            <ul className="track-list">
                {tracks.map((track, index) => {
                    return track.cup.toLowerCase() === name.toLowerCase() ? (
                    <Tracks key={index} {...track} /> 
                    ) : null
                })}
            </ul>
        </div>
    )
}