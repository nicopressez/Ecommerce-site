import { useParams } from "react-router-dom"
import { PropTypes } from "prop-types";

const Item = ({items}) => {
    // Find current item in clothes to display its info
   const { title, gender } =  useParams();
   const currentItem = items[gender].find((item) => item.name === title)
return (
    <>
    <h1>{currentItem.price}</h1>
    <h2>{gender}</h2>
    </>
)
}

Item.propTypes = {
    items: PropTypes.object,
}

export default Item