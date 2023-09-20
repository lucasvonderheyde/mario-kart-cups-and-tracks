import jsonData from "./db.json"
import './App.css';
import { useEffect, useState } from 'react';
import Cups from "./components/Cups/Cups";

export default function App() {
  const [cups, setCups] = useState([])
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/cups")
    .then(response => response.json())
    .then(incomingCups => setCups(previousValue => incomingCups))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/tracks")
    .then(response => response.json())
    .then(incomingTracks => setTracks(previousValue => incomingTracks))
  }, [])

  

  return (
    <div className="App">
      {cups.map((cup, index) => {
        return <Cups key={index} {...cup} tracks={tracks} />
      })}
    </div>
  );
}
