//practic 1
for(var i = 0 ; i <= 10; i++){
    if(i % 2 == 1) continue;
    document.write(i + "\n"); 
}

document.write( "<hr />" );

//practic 2

var i = 0;

while(i < 3){
    alert( "номер " + i + "!" );
	i++;
}

//practic 3

while(true){

var num = prompt("Введите число больше 100" , '');
	if(num > 100) {
		alert("good"); 
		break;
	} 

}

//practic 4


for(i = 0; i <= 10; i++){
	if(i % 2 == 1){
    document.write(i + "\n");
	}
	
}