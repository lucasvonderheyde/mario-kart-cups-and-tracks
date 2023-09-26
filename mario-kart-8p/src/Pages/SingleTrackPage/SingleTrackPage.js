import { useLoaderData } from "react-router-dom"
import App from "../../App"


export default function SingleTrackPage(){
    
    const trackData = useLoaderData()

    return(
        <h1>{trackData.name}</h1>
    )
}

export const singleTrackDataLoader = async({ params }) => {
    const trackResponse = await fetch(`http://localhost:3001/tracks/${params.id}`)
    const tracks = await trackResponse.json()
    
    return tracks
}