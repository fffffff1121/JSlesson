// practic 1

function SumTo(n){
	var summ = 0;
	for(var i = 0; i <= n;i++){
		summ += i;
	}
	document.write(summ);
}
SumTo(1000);
//
document.write("<br/>");
//
// practic 2
function SumTo_2(n){
	if(n != 1){
		return + n + SumTo_2(n-1);
	}else{ 
        return n;
	}
}

document.write(SumTo_2(5));

//
document.write("<br/>");
//
// practic 3
function factorial(n){
	var summ_2 = 1;
	for(i = 1; i <= n; i++){
		summ_2 *= i;
        
	}
    document.write(summ_2);
}
factorial(5);

//
document.write("<br/>");
//
// practic 4
function fib(n){
	var number;
    number = n - (n - 1);
    document.write(number);
}
fib(5);