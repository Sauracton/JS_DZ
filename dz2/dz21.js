// Задание 1
//пример 1
let a = 1, b = 1, c, d; // a = 1, b=1, c=underfined, d=underfined
c = ++a; // 1. а=1 2. ++а=1+1=2 3. с=2 
alert(c); // ответ: 2

//пример 2
// a = 2, b=1, c=2, d=underfined
d = b++; // 1. b=1 2. d=b=1 3. b++=b+1=2
alert(d); //ответ: 1

//пример 3
// a = 2, b=2, c=2, d=1
c = 2 + ++a; // 1. a=2 2. a++=2+1=3 3. c=2+3=5
alert(c); //ответ: 5

//пример 4
// a = 3, b=2, c=5, d=1
d = 2 + b++; // 1. b=2 2. d=2+2=4 3. b++=3
alert(d); //ответ: 4

// a = 3, b=3, c=5, d=4
alert(a); //3
alert(b); //3