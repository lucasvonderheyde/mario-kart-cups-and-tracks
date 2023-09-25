import Navbar from "../../components/Navbar/Navbar";
import Tracks from "../../components/Tracks/Tracks";
import { useLoaderData } from "react-router-dom";

export default function TracksPage(){
   
    const tracksData = useLoaderData()

    return (
        <>
            <Navbar />
            {tracksData.map(track => {
                return <Tracks key={track.id} {...track} />
            })}
        </>
    )
}

export const trackDataLoader = async() => {
    const trackResponse = await fetch("http://localhost:3001/tracks")
    const tracks = await trackResponse.json()

    return tracks
}