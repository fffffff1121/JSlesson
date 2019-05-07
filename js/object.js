// Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

// Создайте пустой объект user.
// Добавьте свойство name со значением Вася.
// Добавьте свойство surname со значением Петров.
// Поменяйте значение name на Сергей.
// Удалите свойство name из объекта.

var user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;

// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
// Работать должно так:
// function isEmpty(obj) {
//   /* ваш код */
// }
// var schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "подъём";
// alert( isEmpty(schedule) ); // false


function isEmpty(obj) {
	var summ = 0;
	for (var key in obj) {
		summ++;
	}
	if (summ > 0) return false;
	if (summ == 0) return true;
}
var schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

alert(isEmpty(schedule)); // false

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.

"use strict";

var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};

var summ = 0;

for (key in salaries) {
	summ += salaries[key];
}

alert(summ);

// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

var max = 0;
var maxName = "";

for (var keyA in salaries) {
	if (max < salaries[keyA]) {

		max = salaries[keyA];
		maxName = keyA;

	}
}

alert(maxName || "нет содрудников");

// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. 

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}

var menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(obj) {

	for (key in obj) {

		if (isNumeric(obj[key])) {

			obj[key] *= 2;

		}

	}

}

multiplyNumeric(menu);

document.write(menu.height);