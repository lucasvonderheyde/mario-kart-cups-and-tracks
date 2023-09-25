import { useLoaderData } from "react-router-dom"
import App from "../../App"


export default function SingleTrackPage(){
    
    const trackData = useLoaderData()

    return(
        <h1>{trackData.name}</h1>
    )
}