'use strict'

let intN = +prompt('Введите целое число от 0 до 999')
/**
 * Функция создает объект, в свойствах которого прописаны разряды введенного числа
 * @param {int} intN - целое число в диапазоне от 0 до 999
 * @returns {Object} - объект со значением величины разрядов в свойствах. При ошибке возвращает пустой объект.
 */
function digitsOfNumber(x) {
    if (Number.isInteger(x) && x >= 0 && x < 1000) {
        return {
            hundreds: Math.floor(x / 100),
            tens: Math.floor((x % 100) / 10),
            units: x % 10,
        }
    }
    alert('Значение должно быть целым числом от 0 до 999!')
    return {};
}
console.log(digitsOfNumber(intN));