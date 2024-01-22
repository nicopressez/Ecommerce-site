import { clothes } from "./clothes";

export const sortPriceLowHigh = (sex, sorting, setsorting) => {
    let gender;
    if (sex === "WOMEN'S")  gender = 'women';
    else if (sex === "MEN'S")  gender = 'men';
    
        const newSorting = {[gender]: sorting[gender].sort((a,b) => 
        +a.price - +b.price)}
        setsorting(newSorting)

}

export const sortPriceHighLow = (sex, sorting, setsorting) => {
    let gender;
    if (sex === "WOMEN'S")  gender = 'women';
    else if (sex === "MEN'S")  gender = 'men';
    
        const newSorting = {[gender]: sorting[gender].sort((a,b) => 
        +a.price < +b.price ?  1 : -1)}
        setsorting(newSorting)
    

}

export const sortColor = (e,sex,sorting,setsorting) => {
    const color = e.target.value;
    let gender
    if (sex === "WOMEN'S")  gender = 'women';
    else if (sex === "MEN'S")  gender = 'men';
    if (e.target.value === "all") setsorting(clothes)

    else {

    const newSorting = {[gender]: sorting[gender].filter((item) => 
        item.color === color)}
        setsorting(newSorting)
    }
}