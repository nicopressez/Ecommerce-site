import PropTypes from 'prop-types';

const Shopitem = ({item}) => {
    return (
<div className='bg-black text-white w-80 text-center font-futura'>
    <img src={item.img} width="331" height="498" className=''></img>
    <h2 className=' text-xl'>{item.name}</h2>
    <h3>{item.price}</h3>

</div> )
}

Shopitem.propTypes = {
item: PropTypes.object
}

export default Shopitem