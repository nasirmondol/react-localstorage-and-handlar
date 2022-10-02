const add =(first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

// const numbers = [40, 98, 120, 80, 99, 33]
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);

// const items = [
//     {id: 1, name: 'alta', price: 20},
//     {id: 1, name: 'palis', price: 20},
//     {id: 1, name: 'balish', price: 20},
//     {id: 1, name: 'nalish', price: 20},
//     {id: 1, name: 'khalis', price: 20},
// ];

// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer,  0)

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;

}

export {
    add, 
    multiply, 
    getTotalPrice as getPrice
};