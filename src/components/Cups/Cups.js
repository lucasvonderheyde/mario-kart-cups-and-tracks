import { useEffect, useState } from "react"
import Tracks from "../Tracks/Tracks"
import "./Cups.css"
import Banner from "../Banner/Banner"

export default function Cups({ name, image, alt_image, banner }) {

    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/tracks")
        .then(response => response.json())
        .then(incomingTracks => setTracks(previousValue => incomingTracks))
      }, [])

    const [tracksRevealed, setTracksRevealed] = useState(true)
    const [cupHidesTrack, setCupHideTracks] = useState(true)
    const [bannerIsShowing, setBannerIsShowing] = useState(true)

    const imageSrc = tracksRevealed ? image : alt_image
    const imageClassName = tracksRevealed ? "alt-image" : "image"

    function handleClick(){
        setTracksRevealed(previousValue => !previousValue)
        setCupHideTracks(previousValue => !previousValue)
        setBannerIsShowing(previousValue => !previousValue)
    }




    return (
        <div className="cups">
            <div>
                {bannerIsShowing ? <Banner banner={banner} /> : null}
            </div>
            <img onClick={handleClick} src={imageSrc} className={imageClassName} />
            <h1 className="cup-title">{cupHidesTrack ? null : name}</h1>
            <ul className="track-list">
                {tracks.map(track => {
                    return tracksRevealed ? null : (track.cup.toLowerCase() === name.toLowerCase() ? (
                    <Tracks key={track.id} {...track} /> 
                    ) : null) 
                })}
            </ul>
        </div>
    )
}