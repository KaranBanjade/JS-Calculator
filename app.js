let In1 = document.getElementById("Num1");
let In2 = document.getElementById("Num2");

let Add = document.getElementById("Add");
let Minus = document.getElementById("Minus");
let Product = document.getElementById("Product");
let Divide = document.getElementById("Divide");
let Clear = document.getElementById("Clear");
let Copy = document.getElementById("copy");

let Out = document.querySelector("#Result");

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
// Function to clear all data
Clear.addEventListener('click',()=>{
    In1.value = "";
    In2.value = "";
    Out.value = "";
})

// Function to copy value of Output
Copy.addEventListener('click',()=>{
    /* Get the text field */
    var copyOut = document.getElementById("Result");
    /* Select the text field */
    copyOut.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the Result: " + copyOut.value);
  })
Add.addEventListener('click',add);
Minus.addEventListener('click',sub);
Product.addEventListener('click',mul);
Divide.addEventListener('click',div);