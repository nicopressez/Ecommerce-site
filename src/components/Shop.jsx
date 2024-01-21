import Shopitem from "./Shopitem"
import { clothes } from "./utils/clothes"

const Shop = () => {
    return (
        <div className=" flex flex-wrap gap-4">
        {clothes.map((clothes,index)  =>
            (<Shopitem item={clothes} key={index}/>)
        )}
        </div>
    )
}

export default Shop