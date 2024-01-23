import { Link } from "react-router-dom";
import Shopitem from "./Shopitem";
import PropTypes from "prop-types";

const Shop = ({ gender, sorting }) => {
  let clothing;
  if (gender === "women") clothing = sorting.women;
  if (gender === "men") clothing = sorting.men;

  return (
    <div className=" flex flex-wrap gap-4 min-h-36 bg-black justify-center pb-20">
      {!clothing[0] ? (
        <div className="text-center">
          <h2
            className="text-white font-futura font-bold
       text-3xl"
          >
            No items found.
          </h2>
          <p className="text-white font-futura">
            Please try again with different filters
          </p>
        </div>
      ) : null}
      {clothing.map((clothes, index) => (
        <Link to={`/shop/${clothes.gender}/${clothes.name}`} key={index}>
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
