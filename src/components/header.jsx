import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import githubLogo from '../assets/images/github.png';


const Header = () => {
    return (
        <header className="bg-gradient-to-b from-black/75 fixed w-screen h-24 z-10 
        transition-colors duration-500 hover:bg-black">
        <h1 className=" drop-shadow-xl text-4xl font-viola font-medium text-center text-white mt-2 tracking-widest
         mb-0">
            Brand
        </h1>
        <nav className="text-center mt-0 pt-0">
        <ul className=" mt-0 flex justify-center text-white font-futura gap-7 text-xs" >
            <li className=" mt-0">
                Home</li>
            <li className="mt-0">
                Men</li>
            <li className="mt-0">
                Women</li>
            <li className="mt-0">
                About</li>
            </ul>
        </nav>
        <FontAwesomeIcon icon={faCartShopping} className=" text-white size-5
          absolute right-28 top-10"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="  text-white size-5
          absolute right-16 top-10" />
          <a href="https://github.com/nicopressez" target='blank'>
          <div className='absolute left-10 top-8 block'>
          <img src={githubLogo} className="size-3 inline text-white mb-1
            " >
           </img>
           <p className='inline font-futura text-white pl-2 text-sm'>Nicolas Pressez</p>
           </div>
           </a>
        </header>
    )
}

export default Header