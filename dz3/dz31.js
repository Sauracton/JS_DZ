'use strict'
console.log('Задание 1')
for (let i = 0; i < 10; i++) {
    if (i == 0) {
        console.log(i + ' - это ноль');
    } else if (i % 2 == 0) {
        console.log(i + ' - это четное число');
    } else {
        console.log(i + ' - это нечетное число');
    }
}
