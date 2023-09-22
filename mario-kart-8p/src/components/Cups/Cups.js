import { useState } from "react"
import Tracks from "../Tracks/Tracks"
import "./Cups.css"
import Banner from "../Banner/Banner"
import { prettyDOM } from "@testing-library/react"

export default function Cups({ name, image, alt_image, banner, tracks }) {

    const [tracksRevealed, setTracksRevealed] = useState(true)
    const [cupHidesTrack, setCupHideTracks] = useState(true)
    const [bannerIsShowing, setBannerIsShowing] = useState(true)

    const imageSrc = tracksRevealed ? image : alt_image
    const imageClassName = tracksRevealed ? "image" : "alt-image"

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
                {tracks.map((track, index) => {
                    return tracksRevealed ? null : (track.cup.toLowerCase() === name.toLowerCase() ? (
                    <Tracks key={index} {...track} /> 
                    ) : null) 
                })}
            </ul>
        </div>
    )
}