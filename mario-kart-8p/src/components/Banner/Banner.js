import "./Banner.css"

export default function Banner({ banner }) {
    return (
        <img className="banner-image" src={banner} />
    )
}