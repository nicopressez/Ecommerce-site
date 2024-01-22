import { PropTypes } from "prop-types";

const TypeOptions = ({ sex, sorting }) => {
  let gender;
  if (sex === "WOMEN'S") gender = "women";
  else if (sex === "MEN'S") gender = "men";

  // Get all the brands from clothes, and then remove duplicates
  let allTypes = sorting[gender].map((item) => item.type);
  let types = allTypes.filter(
    (item, index) => allTypes.indexOf(item) === index,
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

TypeOptions.propTypes = {
  sex: PropTypes.string,
  sorting: PropTypes.object,
};

export default TypeOptions;
