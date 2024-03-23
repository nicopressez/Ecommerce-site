import { sort, sortPriceHighLow, sortPriceLowHigh } from "./utils/sorting";
import ColorOptions from "./ColorOptions";
import { clothes } from "./utils/clothes";
import BrandOptions from "./BrandOptions";
import TypeOptions from "./TypeOptions";
import React,{ useState } from "react";

type ClothesItem = {
  name: string;
  img: any; 
  gender: string;
  price: string;
  type: string;
  brand: string;
  color: string;
  description: string;
  size?: string; 
  quantity?: number;
};

type GenderItems = ClothesItem[];

type ClothesType = {
  women: GenderItems;
  men: GenderItems;
};

type ShopTopPropsType = {
  image: any,
  sex: string,
  sorting: ClothesType,
  setsorting: React.Dispatch<React.SetStateAction<ClothesType>>
}

const ShopTop = ({ image, sex, sorting, setsorting } : 
  ShopTopPropsType
  ) => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    sort(
      sex,
      clothes,
      setsorting,
      e.target.value,
      selectedBrand,
      selectedColor,
    );
  };
  const handleBrandChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
    sort(sex, clothes, setsorting, selectedType, e.target.value, selectedColor);
  };
  const handleColorChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
    sort(sex, clothes, setsorting, selectedType, selectedBrand, e.target.value);
  };

  const sortPrice = (e : React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "priceUp")
      sortPriceLowHigh(sex, sorting, setsorting);
    if (e.target.value === "priceDown")
      sortPriceHighLow(sex, sorting, setsorting);
  };

  return (
    <div>
      <img
        src={image}
        className="absolute w-full h-200 object-cover brightness-90"
      ></img>
      <h1
        className="bg-gradient-to-t from-black pb-96 pt-80 font-futura
     text-5xl text-center text-white drop-shadow-2xl tracking-[12px]"
      >
        {sex}
      </h1>
      <div className="absolute top-3/4 left-1/3 text-white font-futura ">
        <select
          onChange={(e) => sortPrice(e)}
          className="bg-transparent w-32 text-xl mr-12 text-center focus:outline-none pl-2"
        >
          <option value="" className="bg-black">
            Price
          </option>
          <option value="priceUp" className="bg-black">
            Low to High
          </option>
          <option value="priceDown" className="bg-black">
            High to Low
          </option>
        </select>
        <select
          onChange={(e) => handleColorChange(e)}
          className="bg-transparent w-32 text-xl mr-12 text-center focus:outline-none"
        >
          <option value="all" className="bg-black">
            All colors
          </option>
          <ColorOptions sex={sex} sorting={clothes} />
        </select>
        <select
          onChange={(e) => handleBrandChange(e)}
          className="bg-transparent w-42 text-xl mr-12 text-center focus:outline-none"
        >
          <option value="all" className="bg-black">
            All brands
          </option>
          <BrandOptions sex={sex} sorting={clothes} />
        </select>
        <select
          onChange={(e) => handleTypeChange(e)}
          className="bg-transparent w-32 text-xl mr-8 text-center focus:outline-none"
        >
          <option value="all" className="bg-black">
            All types
          </option>
          <TypeOptions sex={sex} sorting={clothes} />
        </select>
        <hr className=" text-center w-full mt-3"></hr>
      </div>
    </div>
  );
};

export default ShopTop;
