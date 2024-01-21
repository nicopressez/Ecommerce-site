import PropTypes from 'prop-types';
import React from 'react';

const ShopTop = ({image, sex}) => {
    return (
        <div>
        <img src={image} className="absolute w-full h-200 object-cover brightness-90"></img>
        <h1 className="bg-gradient-to-t from-black pb-96 pt-80 font-futura
     text-5xl text-center text-white drop-shadow-2xl tracking-widest">{sex}</h1>
        <div className='absolute top-3/4 left-1/3 text-white font-futura '>
            <select className='bg-transparent w-32 text-xl mr-12 text-center'>
                <option value="">Sort</option>
            </select >
            <select className='bg-transparent w-32 text-xl mr-12 text-center'>
                <option value="" className=''>All colors</option>
            </select>
            <select className='bg-transparent w-32 text-xl mr-12 text-center'>
                <option value="">All brands</option>
            </select>
            <select className='bg-transparent w-32 text-xl mr-8 text-center'>
                <option value="">All types</option>
            </select>
            <hr className=' text-center w-full mt-3'></hr>
        </div>
     </div>
    )
}

ShopTop.propTypes = {
    image: PropTypes.string,
    sex: PropTypes.string,
}

export default ShopTop