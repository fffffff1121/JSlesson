// function formatDate(date) { 
//     function type(obj){
//         return {}.toString.call(obj).slice(8, -1);
//     }
    
//     if(type(date) == 'String'){
//         date = new Date(date);
//     }else if(type(date) == 'Number'){
//         date = new Date(date * 1000);
//     }else if(Array.isArray(date) == true){
//         date = new Date(date[0] , date[1] , date[2]);
//     }
//     return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
// }
// alert( formatDate('2011-10-02') ); // 02.10.11
// alert( formatDate(1234567890) ); // 14.02.09
// alert( formatDate([2014, 0, 1]) ); // 01.01.14
// alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

function typeOf(a){
    toString = {}.toString; 
    function type(obj){
        return toString.call(obj).slice(8, -1);
    }
    if(Array.isArray(a) == true){
        let num = 0;
        let numArr = 0;
        a.forEach((currentValue, index) => {
            num++;
            if(Array.isArray(a[index]) == true){
                document.write(index + " элемент массива: " + a[index] + " является подмассивом <br/>");
                numArr++;
            }else document.write(index + " элемент массива: " + a[index] + "<br/>");
            
        });
        document.write("Массив содержит " + num + " элемента" + "<br/>");
        numArr % 2 == 0?document.write("Массив содержит " + numArr + " подмассива" + "<br/>"):document.write("Массив содержит " + numArr + " подмассив" + "<br/>");;
    }else if(type(a) == "Number"){
        let b = a + '';
        document.write("Вы ввели число " + a + "<br/>");

        b[0] == "-"?document.write(a + " является отрицательным числом" + "<br/>"):document.write("Число " + b + " является положительным" + "<br/>");
        a % 2 == 0?document.write(a + " является четным числом" + "<br/>"):document.write(a + " является нечетным числом" + "<br/>");
    }
}

let a = ["a" , "b", "c"];

typeOf(["a" ,["a" , "b", "c"], "b",["a" , "b", "c"], "c"]);
