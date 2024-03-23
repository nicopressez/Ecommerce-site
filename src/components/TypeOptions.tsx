import React from "react";

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

type TypeOptionsProps = {
  sex: string,
  sorting: ClothesType
}
const TypeOptions = ({ sex, sorting } : TypeOptionsProps) => {
  let gender:string = "";
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";

  // Get all the types from clothes, and then remove duplicates
  let allTypes: string[] = sorting[gender].map((item : ClothesItem) => item.type);
  let types: string[] = allTypes.filter(
    (item: string, index: number) => allTypes.indexOf(item) === index,
  );

  // Add an option for each brand in the select
  return (
    <>
      {types.map((type, index) => (
        <option value={type} key={index} className="bg-black">
          {type}
        </option>
      ))}
    </>
  );
};

export default TypeOptions;
