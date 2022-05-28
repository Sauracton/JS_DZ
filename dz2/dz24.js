function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

alert(`Сумма равна ${add(a, b)}`);
alert(`Разница равна ${sub(a, b)}`);
alert(`Произведение равно ${mul(a, b)}`);
alert(`Отношение равно ${div(a, b)}`);