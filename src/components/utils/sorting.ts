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

export const sort = (
  sex: string,
  sorting: ClothesType,
  setsorting: React.Dispatch<React.SetStateAction<ClothesType>>,
  typeValue: string,
  brandValue: string,
  colorValue: string,
) => {
  let gender:string = "";
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";
  let newSorting = sorting;

  if (typeValue !== "all") {
    newSorting = {...newSorting,
      [gender]: newSorting[gender].filter((item) => item.type === typeValue),
    };
  }
  if (colorValue !== "all") {
    newSorting = {...newSorting,
      [gender]: newSorting[gender].filter((item) => item.color === colorValue),
    };
  }
  if (brandValue !== "all") {
    newSorting = {...newSorting,
      [gender]: newSorting[gender].filter((item) => item.brand === brandValue),
    };
  }
  setsorting(newSorting);
};

export const sortPriceLowHigh = (sex, sorting, setsorting) => {
  let gender;
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";

  const newSorting = {
    [gender]: sorting[gender].sort((a, b) => +a.price - +b.price),
  };
  setsorting(newSorting);
};

export const sortPriceHighLow = (sex, sorting, setsorting) => {
  let gender;
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";

  const newSorting = {
    [gender]: sorting[gender].sort((a, b) => (+a.price < +b.price ? 1 : -1)),
  };
  setsorting(newSorting);
};
