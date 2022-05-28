/*
1 рубль
2 - 4 рубля
5 - 10 рублей
*/
let depositStr = prompt('Введите сумму вклада') // перевод строки в числовое значение не делаю, т.к. задача пока в работе только со строкой
let lastCh = depositStr.substring(depositStr.length - 1); // убирает, начиная с начала строки, символы в количестве, указанном в скобках.
switch (lastCh) {
    case '1':
        alert(`Ваша сумма в ${depositStr} рубль успешно зачислена`);
        break;
    case '2':
    case '3':
    case '4':
        alert(`Ваша сумма в ${depositStr} рубля успешно зачислена`);
        break;
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
        alert(`Ваша сумма в ${depositStr} рублей успешно зачислена`);
        break;
    default:
        alert(`Вы ввели некорректное значение`);
}
