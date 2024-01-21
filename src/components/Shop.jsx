import Shopitem from "./Shopitem"
import { clothes } from "./utils/clothes"
import PropTypes from 'prop-types';

const Shop = ({gender}) => {
    return (
        <div className=" flex flex-wrap gap-4 bg-black justify-center pb-20">
        {clothes.map((clothes,index)  =>
            (<Shopitem item={clothes} key={index} gender={gender}/>)
        )}
        </div>
    )
}

Shop.propTypes = {
    gender: PropTypes.string
}



export default Shop