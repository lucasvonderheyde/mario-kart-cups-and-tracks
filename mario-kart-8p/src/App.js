import jsonData from "./db.json"
import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [cups, setCups] = useState([])
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/cups")
    .then(response => response.json())
    .then(incomingCups => setCups(previousValue => incomingCups))
    console.log(cups)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/tracks")
    .then(response => response.json())
    .then(incomingTracks => setTracks(previousValue => incomingTracks))
    console.log(tracks)
  }, [])

  return (
    <div className="App">
      <header>Welcome to Mario Kart</header>
      {/* <Cups /> */}
    </div>
  );
}
