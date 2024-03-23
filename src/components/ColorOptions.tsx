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

type SortingType = {
  women: ClothesItem[];
  men: ClothesItem[];
};

type ColorOptionsProps = {
  sex: string,
  sorting: SortingType;
}

const ColorOptions = ({ sex, sorting } : ColorOptionsProps) => {
  let gender:string = "";
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";

  // Get all the colors from clothes, and then remove duplicates
  let allColors: string[] = sorting[gender].map((item: ClothesItem) => item.color);
  let colors = allColors.filter(
    (item, index) => allColors.indexOf(item) === index,
  );

  // Add an option for each color in the select
  return (
    <>
      {colors.map((color, index) => (
        <option value={color} key={index} className="bg-black">
          {color}
        </option>
      ))}
    </>
  );
};

export default ColorOptions;
