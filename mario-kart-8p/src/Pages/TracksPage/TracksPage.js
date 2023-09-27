import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Tracks from "../../components/Tracks/Tracks";
import { useLoaderData } from "react-router-dom";

export default function TracksPage(){
   
    const tracksData = useLoaderData()
    const [selectedOption, setSelectedOption] = useState('');

    const [filterTracks, setFilterTracks] = useState(tracksData)

    function handleChange(event) {
        const filteredTracksData = tracksData.filter(track => {
          return track.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilterTracks(previousValue => filteredTracksData)
    }    
    
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const collectionOfAppearances = []

    tracksData.forEach((track) => {
        track.appearances.forEach((appearance) => {
          if (!collectionOfAppearances.includes(appearance)) {
            collectionOfAppearances.push(appearance);
          }
        });
      });
      
      console.log(collectionOfAppearances);

    return (
        <>
            <Navbar />
            <input
                type="text"
                placeholder="Search for track"
                onChange={handleChange}
            />
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select a Game</option>
                {collectionOfAppearances.map(appearance => {
                    return <option value={appearance}>{appearance}</option>
                })}
            </select>
            {filterTracks.map(track => {
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