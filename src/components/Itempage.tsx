import { useParams } from "react-router-dom";
import React,{ useContext, useState } from "react";
import { CartContext } from "./CartContext";

type ClothesItem = {
  name:string;
  img: any;
  gender: string;
  price: string;
  type: string;
  brand: string;
  color?: string;
  description: string;
};

type GenderType = {
  women: ClothesItem[];
  men: ClothesItem[];
};

type ItemProps = {
  items:  GenderType
}

const Item = ({ items } : ItemProps) => {
  const [size, setSize] = useState("");

  const { addItem, setShowCart } = useContext(CartContext);

  // Find current item in clothes to display its info
  const { title, gender } = useParams();

  const currentItem = gender && items[gender].find((item : ClothesItem) => item.name === title);
  const sizes = () => {
    if (currentItem.type !== "Accessories")
      return (
        <select
          onChange={(e) => setSize(e.target.value)}
          className="bg-black ml-60 font-futura text-2xl focus:outline-none"
        >
          <option value="">Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      );
  };
  return (
    <div className=" flex">
      <img
        src={currentItem.img}
        className=" object-cover absolute
     h-screen w-2/5 brightness-75"
      ></img>
      <div className=" z-10 bg-gradient-to-l from-black  h-screen w-2/3"></div>
      <div className="bg-black h-screen w-screen pt-44 text-white">
        <h4 className=" font-futura pl-36">{currentItem.brand}</h4>
        <h2 className=" pl-36 text-white font-futuramedium text-3xl">
          {currentItem.name}
        </h2>
        <h3 className="pl-36 font-futura text-2xl">{currentItem.price}€</h3>
        <p className="pl-36 pt-6 font-futura text-xl">
          {currentItem.description}
        </p>
        <hr className=" border-gray-800 ml-16 mr-60 mt-10"></hr>
        {sizes()}
        <button
          onClick={() => {
            addItem(currentItem, size);
            setShowCart(true);
          }}
          className="ml-44 mt-10 text-2xl font-futura rounded-md
                           bg-white text-black pl-10 pr-10"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
