import Cups from "../../components/Cups/Cups";
import Navbar from "../../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";

export default function CupsPage(){
   
    const cupsData = useLoaderData()

    return (
        <>
            <Navbar />
            {cupsData.map(cup => {
                return <Cups key={cup.id} {...cup} />
            })}
        </>
    )
}

export const cupsDataLoader = async() => {
    const cupsResponse = await fetch("http://localhost:3001/cups")
    const cups = await cupsResponse.json()
    
    return cups
}