/*var a = 0.1 + 0.2;
a = (Math.round(0.1 * 10 + 0.2 * 10) / 10);
alert(a);
var b = Math.random();
alert(b);*/

function randomInteger(min, max) {

  return (min + Math.random() * (max - min));

}    
document.write(randomInteger(4 , 6));