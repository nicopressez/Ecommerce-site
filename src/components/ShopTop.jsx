import PropTypes from 'prop-types';
import { sortPriceHighLow, sortPriceLowHigh } from './utils/sorting';
import ColorOptions from './ColorOptions';

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
            <select className='bg-transparent w-32 text-xl mr-12 text-center'>
                <option value="" className=''>All colors</option>
                <ColorOptions sex={sex} sorting={sorting} setsorting={setsorting}/>
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
    sorting: PropTypes.object,
    setsorting: PropTypes.func
}

export default ShopTop