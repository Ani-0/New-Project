const canvas = document.getElementById("canvasText");
canvas.innerHTML = 0;
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const divide = document.getElementById("divide");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const multiply = document.getElementById("multiply");
const zero = document.getElementById("zero");
const power = document.getElementById("power");
const equalTo = document.getElementById("equalTo");
const plus = document.getElementById("plus");

const textReference = {
  seven: "7",
  eight: "8",
  nine: "9",
  minus: "-",
  four: "4",
  five: "5",
  six: "6",
  divide: "/",
  one: "1",
  two: "2",
  three: "3",
  multiply: "*",
  zero: "0",
  power: "^",
  equalTo:" ",
  plus: "+",
};

function buttonPress(name) {
  if (name === "equalTo") {
    evaluateExpression();
  } else if (name === "clear") {
    console.log(canvas.innerHTML)
    let currentExpression = canvas.innerHTML.trim();
    let expressionParts = currentExpression.split(" ");
    expressionParts.pop();
    canvas.innerHTML = expressionParts.join("") || 0;
  } else {
    if(canvas.innerHTML == "0"){
      (canvas.innerHTML = textReference[name])
    }else{
      (canvas.innerHTML += textReference[name]);
    }
  }
  
}

function evaluateExpression() {
  let expression = canvas.innerHTML;
  expression = expression.replace(/\^/g, "**");  // Replacing ^ with **
  try {
    let result = Function('"use strict";return (' + expression + ')')();  // Using Function constructor instead of eval
    canvas.innerHTML = canvas.innerHTML + " = " + result;
  } catch (e) {
    canvas.innerHTML = canvas.innerHTML + " Error";
  }
}
