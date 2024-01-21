import womenImg from '../assets/images/womensTop.jpg'
import Shop from './Shop'
import ShopTop from './ShopTop'
import { useState } from 'react'
import { clothes } from './utils/clothes'

const Women = () => {

    const [sorting, setSorting] = useState(clothes)
    
    return (
        <div>
            <ShopTop image={womenImg} sex={"WOMEN'S"} sorting={sorting} setsorting={setSorting}/>
            <Shop gender={"women"} sorting={sorting}/>
            </div>
        
    )
}

export default Women