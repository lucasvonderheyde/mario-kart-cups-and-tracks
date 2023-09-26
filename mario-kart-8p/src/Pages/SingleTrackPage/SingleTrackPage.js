import { useLoaderData } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

export default function SingleTrackPage(){
    
    const trackData = useLoaderData()

    return(
        <div>
            <Navbar />
            <h1>{trackData.name}</h1>
        </div>
    )
}

export const singleTrackDataLoader = async({ params }) => {
    const trackResponse = await fetch(`http://localhost:3001/tracks/${params.id}`)
    const tracks = await trackResponse.json()
    
    return tracks
}