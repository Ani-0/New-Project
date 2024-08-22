const FirstNumber = document.getElementById("FirstNumber");
const SecondNumber= document.getElementById("SecondNumber");
const Multiple = document.getElementById("Multiple");
const Division = document.getElementById("Division");
const result = document.getElementById("result");

function buttonPress(s){
    if(s=="Multiple")
        {result.innerHTML = FirstNumber.value*SecondNumber.value}
    if(s=="Division")
    {result.innerHTML = FirstNumber.value/SecondNumber.value}
}
buttonPress(); 