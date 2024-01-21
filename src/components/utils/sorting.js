export const sortPriceLowHigh = (sex, sorting, setsorting) => {
    if (sex === "WOMEN'S") {
        const newSorting = {women: sorting.women.sort((a,b) => 
        a.price - b.price)}
        setsorting(newSorting)
    }
    else console.log("blbl")
}