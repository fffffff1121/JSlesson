// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.

// Временная зона – местная. Выведите его на экран.

var date = new Date(2012, 1, 20, 3, 12);
alert(date);

// Имя дня недели
// важность: 5
// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

var date = new Date(2012, 0, 3); // 3 января 2012

function getWeekDay(date) {

	var day = date.getDay();
	switch (day) {
		case 0:
			return "вс"
			break;
		case 1:
			return "пн"
			break;
		case 2:
			return "вт"
			break;
		case 3:
			return "ср"
			break;
		case 4:
			return "чт"
			break;
		case 5:
			return "пт"
			break;
		case 6:
			return "сб"
	}

}

alert(getWeekDay(date)); // Должно вывести 'вт'

//Еще один вариант

var date = new Date(2014, 0, 3); // 3 января 2014
alert(date.toLocaleString('ru', {
	weekday: 'short'
})); // 'Пт'

// День недели в европейской нумерации
// важность: 5
// Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

// День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

function getLocalDay(date) {
	var day = date.getDay();
	if (day == 6) {
		day = 0;
	}
	return day;
}

alert(getLocalDay(new Date(2012, 0, 3))); // 2

// Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

var date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
	var result = new Date();
	result.setDate(date.getDate() - days);
	return result.getDate();
}

alert(getDateAgo(date, 1)); // 1, (1 января 2015)
alert(getDateAgo(date, 2)); // 31, (31 декабря 2014)
alert(getDateAgo(date, 365)); // 2, (2 января 2014)

// Последний день месяца?
// важность: 5
// Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

// Параметры:

// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.
// Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
	var date = new Date(year, month + 1, 0);
	return date.getDate();
}

alert(getLastDayOfMonth(2012, 0)); // 31
alert(getLastDayOfMonth(2012, 1)); // 29
alert(getLastDayOfMonth(2013, 1)); // 28

// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

// Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
	var d = new Date();
	return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
};
document.write(getSecondsToday());


document.write("<br/>");


// Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
	var now = new Date();

	// создать объект из завтрашней даты, без часов-минут-секунд
	var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

	var diff = tomorrow - now; // разница в миллисекундах
	return Math.round(diff / 1000); // перевести в секунды
}
document.write(getSecondsToTomorrow());

// Относительное форматирование даты
// важность: 4
// Напишите функцию formatDate(date), которая форматирует дату date так:

// Если со времени date прошло менее секунды, то возвращает "только что".
// Иначе если со времени date прошло менее минуты, то "n сек. назад".
// Иначе если прошло меньше часа, то "m мин. назад".
// Иначе полная дата в формате "дд.мм.гг чч:мм".

function formatDate(date) {
  var diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) { // прошло менее 1 секунды
    return 'только что';
  }

  var sec = Math.floor(diff / 1000); // округлить diff до секунд

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  var min = Math.floor(diff / 60000); // округлить diff до минут
  if (min < 60) {
    return min + ' мин. назад';
  }

  // форматировать дату, с учетом того, что месяцы начинаются с 0
  var d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ];

  for (var i = 0; i < d.length; i++) {
    d[i] = d[i].slice(-2);
  }

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // только что

alert( formatDate(new Date(new Date - 30 * 1000)) ); // 30 сек. назад

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // 5 мин. назад

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"