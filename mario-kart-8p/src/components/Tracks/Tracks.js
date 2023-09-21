import "./Tracks.css"

export default function Tracks({ name, image }){
    return (
        <div className="track">
            <img className="track-image" src={image} />
        </div>
    )
}