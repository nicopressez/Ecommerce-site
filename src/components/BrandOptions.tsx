import React from "react";

type ClothesItem = {
  name:string;
  img: any;
  gender: string;
  price: string;
  type: string;
  brand: string;
  color: string;
  description: string;
};

type SortingType = {
  women: ClothesItem[];
  men: ClothesItem[];
};

type BrandOptionsProps = {
  sex: string,
  sorting: SortingType;
}

function BrandOptions({ sex, sorting } : BrandOptionsProps)  {
  let gender: string = "";
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";

  // Get all the brands from clothes, and then remove duplicates
  const allBrands = sorting[gender].map((item : ClothesItem) => item.brand);
  const brands: string[] = allBrands.filter(
    (item: ClothesItem, index: number) => allBrands.indexOf(item) === index,
  );

  // Add an option for each brand in the select
  return (
    <>
      {brands.map((brand, index: number) => (
        <option value={brand} key={index} className="bg-black">
          {brand}
        </option>
      ))}
    </>
  );
};
export default BrandOptions;
