import PropTypes from 'prop-types';
import React from 'react';

const ShopTop = ({image}) => {
    return (
        <img src={image} className=" w-full h-200 object-cover"></img>
    )
}

ShopTop.propTypes = {
    image: PropTypes.string,
}

export default ShopTop