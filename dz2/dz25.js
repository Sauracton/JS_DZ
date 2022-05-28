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

let x1 = Number(prompt('Введите первое число'));
let y1 = Number(prompt('Введите второе число'));
let mathOper = prompt('Введите знак действия +, -, * или /');

switch (mathOper) {
    case '+':
        alert(`Результат равен: ${add(x1, y1)}`);
        break;
    case '-':
        alert(`Результат равен: ${sub(x1, y1)}`);
        break;
    case '*':
        alert(`Результат равен: ${mul(x1, y1)}`);
        break;
    case '/':
        alert(`Результат равен: ${div(x1, y1)}`);
        break;
    default:
        alert('Введены некорректные данные');
}