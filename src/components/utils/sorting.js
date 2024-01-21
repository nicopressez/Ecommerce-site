export const sortPriceLowHigh = (sex, sorting, setsorting) => {
    let gender;
    if (sex === "WOMEN'S")  gender = 'women';
    else if (sex === "MEN'S")  gender = 'men';
    
        const newSorting = {[gender]: sorting.women.sort((a,b) => 
        +a.price - +b.price)}
        setsorting(newSorting)

}

export const sortPriceHighLow = (sex, sorting, setsorting) => {
    let gender;
    if (sex === "WOMEN'S")  gender = 'women';
    else if (sex === "MEN'S")  gender = 'men';
    
        const newSorting = {[gender]: sorting.women.sort((a,b) => 
        +a.price < +b.price ?  1 : -1)}
        setsorting(newSorting)
        console.log(newSorting)
    

}