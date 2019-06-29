    // function work(a, b) {
    //     alert( a + b ); // work - произвольная функция
    // }
  
    // function makeLogging(f, log) { 
    //     function wrapper(){
    //         log.push([].slice.call(arguments));
    //         return f.apply(this, arguments);
    //     }
    //     return wrapper;
    // }
  
    // var log = [];
    // work = makeLogging(work, log);
  
    // work(1, 2); // 3
    // work(4, 5); // 9
  
    // for (var i = 0; i < log.length; i++) {
    //     var args = log[i]; // массив из аргументов i-го вызова
    //     alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
    // }   


////////////////////////////////////////////

function f(x) {
    return Math.random() * x; // random для удобства тестирования
  }
  
  function makeCaching(f) {
      return function(a){
        let array = [];
        array.push(a);
        a = array[0];
        
      }
  }
  
  f = makeCaching(f);
  
  var a, b;
  
  a = f(1);
  b = f(1);
  alert( a == b ); // true (значение закешировано)
  
  b = f(2);
  alert( a == b ); // false, другой аргумент => другое значение