'use strict'
console.log('Задание 3')
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(item => {
    item.price = item.price * 0.85;
});

console.log(products);