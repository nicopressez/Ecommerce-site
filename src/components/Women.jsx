import womenImg from '../assets/images/womensTop.jpg'
import Shop from './Shop'
import ShopTop from './ShopTop'

const Women = () => {
    return (
        <div>
            <ShopTop image={womenImg} sex={"WOMEN'S"} />
            <Shop />
            </div>
        
    )
}

export default Women