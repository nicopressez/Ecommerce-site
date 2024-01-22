import { PropTypes } from "prop-types";

const BrandOptions = ({ sex, sorting }) => {
  let gender;
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";

  // Get all the brands from clothes, and then remove duplicates
  let allBrands = sorting[gender].map((item) => item.brand);
  let brands = allBrands.filter(
    (item, index) => allBrands.indexOf(item) === index,
  );

  // Add an option for each brand in the select
  return (
    <>
      {brands.map((brand, index) => (
        <option value={brand} key={index}>
          {brand}
        </option>
      ))}
    </>
  );
};

BrandOptions.propTypes = {
  sex: PropTypes.string,
  sorting: PropTypes.object,
};

export default BrandOptions;
