let In1 = document.getElementById("Num1");
let In2 = document.getElementById("Num2");

let Add = document.getElementById("Add");
let Minus = document.getElementById("Minus");
let Product = document.getElementById("Product");
let Divide = document.getElementById("Divide");

let Out = document.querySelector("#Result");
// Output.

let x = 0;
let y = 0;

function Get(){
    x = parseFloat(In1.value);
    y = parseFloat(In2.value);
}
   
function add() {
    Get();
    Out.value = x+y;
}
function sub(){
    Get();
    Out.value = x-y;
}
function mul(){
    Get();
    Out.value = x*y;
}
function div(){
    Get();
    Out.value = x/y;
}

Add.addEventListener('click',add);
Minus.addEventListener('click',sub);
Product.addEventListener('click',mul);
Divide.addEventListener('click',div);