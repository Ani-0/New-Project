const mylable = document.getElementById("mylable");
const incresing =document.getElementById("incresing");
const reset = document.getElementById("reset");
const decresing = document.getElementById("decresing");
let number = 0;
function buttonPress(action) {
    if(action === "incresing"){
        number++;
        mylable.innerHTML = number;
    }else if(action === "decresing"){
        number--;
        mylable.innerHTML = number;
    }else if(action === "reset"){
        number = 0
        mylable.innerHTML = number;
    }else{
        console.error("error");
    }
}