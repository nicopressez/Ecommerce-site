import womenImg from "../assets/images/womensTop.jpg";
import Shop from "./Shop";
import ShopTop from "./ShopTop";
import { useState, useEffect } from "react";
import { clothes } from "./utils/clothes";

const Women = () => {
  const [sorting, setSorting] = useState(clothes);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={` opacity-0 transition-all duration-300 ${loaded ? "opacity-100" : null} `}
    >
      <ShopTop
        image={womenImg}
        sex={"WOMEN'S"}
        sorting={sorting}
        setsorting={setSorting}
      />
      <Shop gender={"women"} sorting={sorting} />
    </div>
  );
};

export default Women;
