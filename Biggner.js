const numbers = [1, 2, 3, 4, 5, 6];
function evenNum(Num){
    if(Num %2 === 0){
        console.log(Num, "Even Number");
    }
    else{
        console.log(Num,"ODD Number");
    }
}
numbers.forEach(evenNum);