// Как в функции отличить отсутствующий аргумент от undefined?

// function f(x) {
//   // ..ваш код..
//   // выведите 1, если первый аргумент есть, и 0 - если нет
// }

// f(undefined); // 1
// f(); // 0

function f(x) {

   alert(arguments.length?1:0);

}
f(undefined); // 1
f(); // 0

// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов

function sum() {

    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {

        sum += arguments[i];

    }

    return sum;

}

document.write(sum(1, 2, 3, 4));