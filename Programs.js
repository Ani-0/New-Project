const firstNumber = document.getElementById("firstNumber");
const SecondNumber = document.getElementById("SecondNumber");
const addbutton = document.getElementById("addbutton");
const minus = document.getElementById("minus");
const results = document.getElementById("results");
function buttonPress(number){
      if(number == 'addbutton'){
        results.innerHTML = Number(firstNumber.value) + Number(SecondNumber.value)
      }
}
buttonPress();