export const cart = [];

export const addItem = (item, size) => {
    const itemExists = cart.filter((element) => element.name === item.name)
    const exactItem = itemExists.find((element) => element.size === size)
    // If element doesn't already exist, create  
    if (!itemExists[0])
    {cart.push({...item, quantity:1, size:size});
    }  
    // If element exists and size is same, just add 1 quantity
    else  if (exactItem) cart.filter((element) => element.name === item.name)
    .find((element) => element.size === size).quantity += 1;
    // If element exists and size is different, create 
    else 
    {cart.push({...item, quantity:1, size:size});
}

    console.log(cart)
}