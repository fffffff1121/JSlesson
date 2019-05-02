// practic lesson 1

var titleJS = prompt("Каково «официальное» название JavaScript?" , '');
if(titleJS == "ECMAScript")
{

	alert("Верно!");

}else
    {

	    alert("Не знаете? «ECMAScript»!");

    }

var number = prompt("Введите число - " , '');

if(number > 0)
	alert(" 1 ");
else if(number < 0)
	alert(" -1 ");
else
	alert(" 0 ");


//practic lesson 2

var userName = prompt("Введите логин - " , '' );

if(userName == "Админ")
{

var passwordUser = prompt("Введите пароль - " , '');

if(passwordUser == "Черный Властелин")
    alert("Добро пожаловать!");
else if(passwordUser == null)
	alert("Вход отменен!");
else
	alert("Пароль неверный!");

}else if(userName == null)
    {

        alert("Вход отменен!")

    }
    else
        alert("Я вас не знаю!");
    
//practic lesson 3

result = (a + b < 4)?alert("Мало"):alert("Много");   

//practic lesson 4

var message;
var login;

message = (login == 'Вася')?"Привет":(login == 'Директор')?'Здравствуйте':(login == '')?'Нет логина':''