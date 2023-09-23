import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Tracks from "../../components/Tracks/Tracks";

export default function TracksPage(){
   
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/tracks")
        .then(response => response.json())
        .then(incomingTracks => setTracks(previousValue => incomingTracks))
      }, [])
   
    return (
        <>
            <Navbar />
            {tracks.map(track => {
                return <Tracks key={track.id} {...track} />
            })}
        </>
    )
}