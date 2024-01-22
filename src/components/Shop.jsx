import { Link } from "react-router-dom";
import Shopitem from "./Shopitem";
import PropTypes from "prop-types";

const Shop = ({ gender, sorting }) => {
  let clothing;
  if (gender === "women") clothing = sorting.women;
  if (gender === "men") clothing = sorting.men;

  return (
    <div className=" flex flex-wrap gap-4 bg-black justify-center pb-20">
      {clothing.map((clothes, index) => (
        <Link to={`/shop/${clothes.gender}/${clothes.name}`}key={index}>
        <Shopitem item={clothes} key={index} gender={gender} />
        </Link>
      ))}
    </div>
  );
};

Shop.propTypes = {
  gender: PropTypes.string,
  sorting: PropTypes.object,
};

export default Shop;
