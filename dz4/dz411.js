'use strict'
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}
ProductES5.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};

class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

const prod1 = new ProductES5('Продукт1', 400);
const prod2 = new ProductES6('Продукт2', 600);
console.log(prod1);
console.log(prod2);
prod1.make25PercentDiscount();
prod2.make25PercentDiscount();
console.log(prod1);
console.log(prod2);