import { useLoaderData} from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import styles from "./SingleTrackPage.css"



export default function SingleTrackPage(){
    const [cups, setCups] = useState([])
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3001/cups")
        .then(resp=> resp.json())
        .then(data => setCups(data))
    }, [])
    
    const trackData = useLoaderData()
    const appearances = trackData.appearances
    const listOfAppearances = appearances.map(appearance => {
        return <li>{appearance}</li>
    })
    const cup = cups.filter(cup =>  cup.name === trackData.cup)[0]

    function handleClick(){
       setFavorite((prevVal) => !prevVal)
            fetch(`http://localhost:3001/tracks/${trackData.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    favorite: favorite
                })
            })
}

return(
    <div className="singleTrackContainer">
        <Navbar />
        <div className="favoriteSection">
    <h1 className="trackName">{trackData.name}</h1>
    <div className="favoriteIconWrapper">
        <p className="starIcon" onClick={handleClick}><span id = "Favorite">Favorite:</span> {favorite ? "★" : "☆"} </p>
    </div>
</div>

        <div className="cupInfoSection">
            <img className="cupBanner" src={cup ? cup.banner : null} alt="Cup Banner" />
            {cup && <img className="cupImage" src={cup.image} alt="Cup" />}
            <h2 className="cupName">{trackData.cup}</h2>
        </div>
        <div className="appearancesSection">
            <h2 className="appearancesTitle">Appearances</h2>
            <ul className="appearancesList">
                {listOfAppearances}
            </ul>
        </div>
    </div>
)

}

export const singleTrackDataLoader = async({ params }) => {
    const trackResponse = await fetch(`http://localhost:3001/tracks/${params.id}`)
    const tracks = await trackResponse.json()

    return tracks
}


