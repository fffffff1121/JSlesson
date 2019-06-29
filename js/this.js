
// let calculator = {
//    read : function(){
//      this.first = +prompt('Input a = ', '');
//      this.second = +prompt('Input b = ', '');
//    },
//    sum : function(){
//       return this.first  + this.second;
//    },
//    mul : function(){
//       return this.first  * this.second;
//    }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// ///////////////////////////////////////////////////

// var ladder = {
//    step: 0,
//    up: function() { // вверх по лестнице
//      this.step++;
//      return this;
//    },
//    down: function() { // вниз по лестнице
//      this.step--;
//      return this;
//    },
//    showStep: function() { // вывести текущую ступеньку
//      alert( this.step );
//      return this;
//    }
//  };

//  ladder.up().up().down().up().down().showStep();

 /////////////////////////////////////////////////



//////////////////////////////////////////////////

let object = {
   toString : 1,
   valueOf : '1'
}

function New(arg){
   this.number = arg;
}

let newArg = new New(8);

document.write(newArg.number);