let number = window.prompt("guess the number");
number = Number(number);
if(number == 0 || number <= 10){
    console.log("Good Work");
}else{
    console.log("Not Matched");
}