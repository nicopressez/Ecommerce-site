import { useParams } from "react-router-dom"
import { PropTypes } from "prop-types";

const Item = ({items}) => {
    // Find current item in clothes to display its info
   const { title, gender } =  useParams();

   
   const currentItem = items[gender].find((item) => item.name === title)
   const sizes = () => {
    if (currentItem.type !== "Accessories") return (
        <select className="bg-black ml-60 font-futura text-2xl">
        <option value="">Size</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
    </select>
    )
   }
return (
    <div className=" flex">
    <img src={currentItem.img} className=" contain absolute
     h-screen w-2/5 brightness-75"></img>
     <div className=" z-10 bg-gradient-to-l from-black  h-screen w-2/3"></div>
    <div className="bg-black h-screen w-screen pt-44 text-white">
        <h4 className=" font-futura pl-36">{currentItem.brand}</h4>
        <h2 className=" pl-36 text-white font-futuramedium text-3xl">
            {currentItem.name}
            </h2>
        <h3 className="pl-36 font-futura text-2xl">{currentItem.price}€</h3>
        <p className="pl-36 pt-6 font-futura text-xl">{currentItem.description}</p>
        <hr className=" border-gray-800 ml-16 mr-60 mt-10"></hr>
        {sizes()}
        <button className="ml-44 mt-10 text-2xl font-futura rounded-md
                           bg-white text-black pl-10 pr-10">Add to cart</button>
    </div>
    </div>
    
)
}

Item.propTypes = {
    items: PropTypes.object,
}

export default Item