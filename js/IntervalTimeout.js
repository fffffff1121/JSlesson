// let n = 0;
// let interval = setInterval(() => {
//     console.log(n += 1);
//     if(n == 20){
//         clearInterval(interval);
//     }
// },100)

/////////////////////////////////////////////

// let i = 1;
// const TIME = setTimeout(function timeout(){
//     if(i < 20) setTimeout(timeout, 100);
//     console.log(i);
//     i++
// },100)

///////////////////////////////////////////////

// function f(x) {
//     alert( x );
// }
  
// function delay(func, ms){
//     return function(){
//         var savedThis = this;
//         var savedArgs = arguments;
//         setTimeout(function(){
//             func.apply(savedThis ,savedArgs)
//         },ms);
//     }
// }

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 15000);
  
// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

function f() { 
    alert(this);
}

function debounce(func, ms){
    return function(){
        let MS = 0;
        const THIS = this;
        const ARGUMENTS = arguments;
        MS += ms;
        setTimeout(function(){
            func.apply(THIS, ARGUMENTS);
        },MS)
    }
}

let f = debounce(f, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)

setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)

