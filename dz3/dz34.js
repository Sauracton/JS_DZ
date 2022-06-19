'use strict'
console.log('Задание 4')
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const prodPhoto = products2.filter(x1 => x1.photos?.length > 0);
console.log(prodPhoto);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

const prodPrice = products2.sort(function (a, b) {
    if (a.price > b.price) return 1;
    if (a.price == b.price) return 0;
    if (a.price < b.price) return -1;
});
console.log(prodPrice);