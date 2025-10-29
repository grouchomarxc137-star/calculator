"use strict";
let x;
let y;
let operator;

const numberButton = document.querySelectorAll(".btnNum");
const calculatorScreen = document.getElementById("calScreen");









let add = (x,y) => {
    return x+y;
}
let substract = (x,y) => {
    return x-y;
}
let multiply = (x,y) => {
    return x*y;
}
let divide = (x,y) => {
    return x/y;
}

let operate = (x,operator,y) => {
    switch(operator){
        case "+":
            add(x,y);
            break;
        case "-":
            substract(x,y);
            break;
        case "*":
            multiply(x,y);
            break;
        case "/":
            divide(x,y);
            break;
    }
}
numberButton.forEach(button => {
    button.addEventListener("click", (e) => {
        calculatorScreen.textContent += e.currentTarget.value;
    });
});