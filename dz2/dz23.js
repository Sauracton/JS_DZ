let x1 = Number(prompt('Введите любое первое целое число от -100 до +100'));
let x2 = Number(prompt('Введите любое второе целое число от -100 до +100'));
if (x1 >= 0 && x2 >= 0) {
    alert(x1 - x2);
} else if (x1 < 0 && x2 < 0) {
    alert(x1 * x2);
} else {
    alert(x1 + x2);
}
