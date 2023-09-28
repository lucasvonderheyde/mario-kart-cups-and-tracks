import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Tracks from "../../components/Tracks/Tracks";
import { useLoaderData } from "react-router-dom";
import "./TracksPage.css"

export default function TracksPage(){

    const tracksData = useLoaderData();

    const [selectedAppearance, setSelectedAppearance] = useState('');
    const [filterGames, setFilterGames] = useState('');

    const handleTextChange = (event) => {
        setFilterGames(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelectedAppearance(event.target.value);
    };

    const uniqueAppearances = new Set();
    tracksData.forEach(track => {
        track.appearances.forEach(appearance => {
            uniqueAppearances.add(appearance);
        });
    });

    const sortedUniqueAppearances = Array.from(uniqueAppearances).sort();

    const filteredAndSortedTracks = tracksData
        .filter(track => {
            return track.name.toLowerCase().includes(filterGames.toLowerCase());
        })
        .filter(track => {
            return selectedAppearance === '' || track.appearances.includes(selectedAppearance);
        })
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

    return (
        <>
        <Navbar />
        <div className="top-bar">
            <input
                type="text"
                placeholder="Search for track by name"
                value={filterGames}
                onChange={handleTextChange}
            />
            <select value={selectedAppearance} onChange={handleSelectChange}>
                <option value="">Select a Game</option>
                {sortedUniqueAppearances.map((appearance) => {
                    return (
                        <option key={appearance} value={appearance}>
                            {appearance}
                        </option>
                    );
                })}
            </select>
        </div>
        <div className="tracks-container">
            {filteredAndSortedTracks.map((track) => {
                return <Tracks key={track.id} {...track} />;
            })}
        </div>
    </>
    
    )
}

export const trackDataLoader = async() => {
    const trackResponse = await fetch("http://localhost:3001/tracks")
    const tracks = await trackResponse.json()
    
    return tracks
}
