const canvas = document.getElementById("canvas");
const fahrenheit = document.getElementById("fahrenheit");
const Celsius = document.getElementById("Celsius");
const result = document.getElementById("result");
let temp;
function buttonpress(){
     if(fahrenheit.checked){
        temp = Number(canvas.value)
        temp = (temp - 32) *(9/5);
        result.innerHTML = temp.toFixed(2) + "°C" 
    }
    else if(Celsius.checked){
        temp = Number (canvas.value);
        temp = temp * 9 / 5 + 32;
        result.innerHTML = temp.toFixed(2) + "°F";
    }
    else{
        result.innerHTML = "selecte a unit";
    }
}

