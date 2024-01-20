import backgroundVideo from '../assets/videos/backgroundVideo.mp4'

const Homepage = () => {
    return (
        <div className="">
        
        <video src={backgroundVideo} autoPlay loop muted 
        className="brightness-90 z-0 absolute top-0 left-0 w-full h-full object-cover">
        </video>
        <button className="absolute top-2/4 left-1/3 z-10  font-futura text-white
         bg-black w-64 h-12 font-medium text-2xl 
         transition-colors duration-300 hover:bg-white hover:text-black">
            SS23 Collection</button>
            <button className="absolute top-2/4 right-1/3 z-10  font-futura text-white
         bg-black w-64 h-12 font-medium text-2xl shadow-xl
            transition-all duration-300 hover:bg-white hover:text-black">
            FW23 Collection</button>
        
        </div>
    )
}

export default Homepage