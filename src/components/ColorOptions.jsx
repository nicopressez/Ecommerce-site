import { PropTypes } from "prop-types";

const ColorOptions = ({sex, sorting}) => {
    let gender;
    if (sex === "WOMEN'S")  gender = 'women';
    else if (sex === "MEN'S")  gender = 'men';

// Get all the colors from clothes, and then remove duplicates
        let allColors = sorting[gender].map((item) => item.color);
        let colors = allColors.filter((item, index) => allColors.indexOf(item) === index)
        
// Add an option for each color in the select
        return (<>
            {colors.map((color,index) => 
            <option value={color} key={index}>{color}</option>               
            )}
            </>
            
        )
    

}

ColorOptions.propTypes = {
    sex: PropTypes.string,
    sorting: PropTypes.object,
}

export default ColorOptions