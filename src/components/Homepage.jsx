import Header from "./header"
import backgroundVideo from '../assets/videos/backgroundVideo.mp4'

const Homepage = () => {
    return (
        <div className="">
        <Header />
        <video src={backgroundVideo} autoPlay loop muted 
        className=" z-0 absolute top-0 left-0 w-full h-full object-cover">
        </video>
        </div>
    )
}

export default Homepage