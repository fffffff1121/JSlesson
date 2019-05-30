// Сумма через замыкание
// важность: 4
// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

// Да, именно так, через двойные скобки (это не опечатка). Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {

	return function(b) {
		return a + b;
	}

}

alert(sum(3)(4));

// Функция - строковый буфер
// важность: 5
// В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:

// Добавить значение в буфер.
// Получить текущее содержимое.
// Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value)
//  добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() 
//  – возвращает его.

function makeBuffer() {
	var buffer = '';
	return function pieceF(piece) {
		if (arguments.length == 0) {
			return buffer;
		}
		buffer += piece;
        pieceF.clear = function() {
			buffer = '';
		}
		
	}
    
}
var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
buffer.clear();
alert(buffer()); // 'Замыкания Использовать Нужно!'

// Сортировка
// важность: 5
// У нас есть массив объектов:

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];
// Обычно сортировка по нужному полю происходит так:

// // по полю name (Вася, Маша, Петя)
// users.sort(function(a, b) {
//   return a.name > b.name ? 1 : -1;
// });

// // по полю age  (Маша, Вася, Петя)
// users.sort(function(a, b) {
//   return a.age > b.age ? 1 : -1;
// });
// Мы хотели бы упростить синтаксис до одной строки, вот так:

// users.sort(byField('name'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Маша, Вася, Петя
// То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)

// Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field,
 // чтобы пример выше заработал.

 function byField(field) {
 	var arg = (+field);
 	return function(a , b){
 		return b.arg > a.arg ? 1 : -1;
 	}
 }

 var users = [{
   name: "Вася",
   surname: 'Иванов',
   age: 20
 }, {
   name: "Петя",
   surname: 'Чапаев',
   age: 25
 }, {
   name: "Маша",
   surname: 'Медведева',
   age: 18
 }];

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя