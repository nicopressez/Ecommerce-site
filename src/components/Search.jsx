import { clothes } from "./utils/clothes"
import searchImg from "../assets/images/search.jpg"
import { Link } from "react-router-dom"
const Search = () => {
    let allClothes = clothes.women.concat(clothes.men)
    return (
            <div className="bg-black min-h-screen overflow-hidden">
            <img src={searchImg} className="absolute z-0 w-full h-[300px] object-cover"></img>
            <div className="bg-gradient-to-t from-black pt-[300px] font-futura
      drop-shadow-2xl text-white" >
        <h1 className=" w-screen absolute top-32 text-center tracking-[16px] text-5xl">
            SEARCH
            </h1>
        </div>
        <input type="text" placeholder="Search" className="bg-gray-900 border-gray-500 border-[1px] 
         pl-5 pr-24 pt-1 pb-1 font-futuramedium text-white focus:outline-none text-xl
          rounded-xl ml-32 mt-10"></input>
          <div className=" flex flex-col  font-futura ml-[550px]  text-white w-screen">
          {allClothes.map ((item, i) => (
            <div className="" key={i}>
            <Link to={`/shop/${item.gender}/${item.name}`} >
                <hr className=" border-gray-600 mb-6 mt-6 w-1/2"></hr>
                <img src={item.img} className="float-left object-cover w-40 h-52 mr-8"></img>
                <h3 className=" mt-16 text-sm">{item.brand}</h3>
                <h2 className="text-xl font-bold inline">{item.name}</h2>
                <h2>{item.price}€</h2>
                </Link>
            </div>
            
          ))}
          </div>
        </div>
    )
}

export default Search