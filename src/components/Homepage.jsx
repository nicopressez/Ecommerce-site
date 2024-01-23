import { Link } from "react-router-dom";
import backgroundVideo2 from "../assets/videos/backgroundVideo2.mp4";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <>
    <div  className={` opacity-0 transition-all duration-500 ${loaded ? "opacity-100" : null} `} >
      <video
        src={backgroundVideo2}
        autoPlay
        loop
        muted
        className="brightness-90 z-0 absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <button
        className="absolute top-2/4 left-1/3 z-10  font-futura text-white
         bg-black w-64 h-12 font-medium text-2xl 
         transition-colors duration-300 hover:bg-white hover:text-black"
      >
        <Link to="/women">
        SS23 Collection
        </Link>
      </button>
      <button
        className="absolute top-2/4 right-1/3 z-10  font-futura text-white
         bg-black w-64 h-12 font-medium text-2xl shadow-xl
            transition-all duration-300 hover:bg-white hover:text-black"
      >
        <Link to="/men">
        FW23 Collection
        </Link>
      </button>
    </div>
    </>
  );
};

export default Homepage;
