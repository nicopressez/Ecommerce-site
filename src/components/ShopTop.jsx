import PropTypes from 'prop-types';
import {sortBrand, sortPriceHighLow, sortPriceLowHigh, sortColor, sortTypes } from './utils/sorting';
import ColorOptions from './ColorOptions';
import { clothes } from './utils/clothes';
import BrandOptions from './BrandOptions';
import TypeOptions from './TypeOptions';


const ShopTop = ({image, sex, sorting, setsorting}) => {

    const sortPrice = (e) => {
    if (e.target.value ==="priceUp") sortPriceLowHigh(sex,sorting,setsorting)
    if (e.target.value ==="priceDown") sortPriceHighLow(sex,sorting,setsorting)
    }

    return (
        <div>
        <img src={image} className="absolute w-full h-200 object-cover brightness-90"></img>
        <h1 className="bg-gradient-to-t from-black pb-96 pt-80 font-futura
     text-5xl text-center text-white drop-shadow-2xl tracking-widest">{sex}</h1>
        <div className='absolute top-3/4 left-1/3 text-white font-futura '>
            <select onChange={(e) => sortPrice(e)} className='bg-transparent w-32 text-xl mr-12 text-center'>
                <option value="" >Price</option>
                <option value="priceUp">Low to High</option>
                <option value="priceDown">High to Low</option>
            </select >
            <select onChange={(e) => sortColor(e,sex,clothes,setsorting)} className='bg-transparent w-32 text-xl mr-12 text-center'>
                <option value="all" className=''>All colors</option>
                <ColorOptions sex={sex} sorting={clothes}/>
            </select>
            <select onChange={(e) => sortBrand(e,sex,clothes,setsorting)} className='bg-transparent w-32 text-xl mr-12 text-center'>
                <option value="all">All brands</option>
                <BrandOptions sex={sex} sorting={clothes} />
            </select>
            <select onChange={(e) => sortTypes(e,sex,clothes,setsorting)}className='bg-transparent w-32 text-xl mr-8 text-center'>
                <option value="all">All types</option>
                <TypeOptions sex={sex} sorting={clothes}/>
            </select>
            <hr className=' text-center w-full mt-3'></hr>
        </div>
     </div>
    )
}

ShopTop.propTypes = {
    image: PropTypes.string,
    sex: PropTypes.string,
    sorting: PropTypes.object,
    setsorting: PropTypes.func
}

export default ShopTop