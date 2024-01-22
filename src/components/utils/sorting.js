export const sort = (
  sex,
  sorting,
  setsorting,
  typeValue,
  brandValue,
  colorValue,
) => {
  let gender;
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";
  let newSorting = sorting;

  console.log(typeValue, colorValue);
  if (typeValue != "all") {
    newSorting = {
      [gender]: newSorting[gender].filter((item) => item.type === typeValue),
    };
  }
  if (colorValue != "all") {
    newSorting = {
      [gender]: newSorting[gender].filter((item) => item.color === colorValue),
    };
  }
  if (brandValue != "all") {
    newSorting = {
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
