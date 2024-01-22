import menImg from "../assets/images/mensTop.jpg";
import Shop from "./Shop";
import ShopTop from "./ShopTop";
import { useState } from "react";
import { clothes } from "./utils/clothes";

function Men() {
  const [sorting, setSorting] = useState(clothes);
  return (
    <div>
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
