/*let num1 =prompt("enter a number");
let num2= prompt("enter a number");
let max= (num1>num2) ? num1 : num2;
console.log(max);*/

function inputNum(){
    let num;
    num = prompt("enter a number");
    if (isNaN(num)) {
         return num="Error: its not a number";
    }else{
        return num;
    }
    
}

function funMax(num1,num2) {
    let max= (num1>num2) ? num1 : num2;
     return max;
     
}
let num1 = inputNum();
let num2 = inputNum();
console.log(funMax(num1, num2));
//Retirement calculator
let yourName = prompt("enter youre Name");
let yearretier = ("enter age would you like to retire");
