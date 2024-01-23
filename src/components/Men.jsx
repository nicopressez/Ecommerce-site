import menImg from "../assets/images/mensTop.jpg";
import Shop from "./Shop";
import ShopTop from "./ShopTop";
import { useState,useEffect } from "react";
import { clothes } from "./utils/clothes";

function Men() {
  const [sorting, setSorting] = useState(clothes);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <div className={` opacity-0 transition-all duration-300 ${loaded ? "opacity-100" : null} `}>
      <ShopTop
        image={menImg}
        sex={"MEN'S"}
        sorting={sorting}
        setsorting={setSorting}
      />
      <Shop gender={"men"} sorting={sorting} />
    </div>
  );
}

export default Men;
