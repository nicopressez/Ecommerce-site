import React from "react";

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

type ShopitemPropsType = {
  item: ClothesItem
}


const Shopitem = ({ item } : ShopitemPropsType) => {
  return (
    <div className="group bg-black w-80 text-center font-futura ">
      <img
        src={item.img}
        className=" object-cover h-96 w-96 group-hover:h-72
     transition-all duration-300"
      ></img>
      <div
        className="bg-black text-white w-80 h-16 text-center font-futura
    group-hover:h-40 transition-all duration-300 group-hover:bg-white
    group-hover:text-black"
      >
        <h2 className=" text-xl font-bold pt-2">{item.name}</h2>
        <h2 className="text-black text-ms mb-5 hidden group-hover:inline transition-all delay-300 duration-300">
          {item.brand}
        </h2>
        <h3 className="text-white group-hover:font-bold duration-300 group-hover:text-black group-hover:font-xl group-hover:pb-4">
          {item.price}€
        </h3>
        <p className="text-black hidden group-hover:inline transition-all delay-300 duration-300">
          {item.description}
        </p>
      </div>
    </div>
  );
};
export default Shopitem;
