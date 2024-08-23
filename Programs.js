function spacifyNum(Num){
    if(Num <= 19){
    return 19 - Num 
    }else{
        return (Num - 19)*3
    }
}
console.log(spacifyNum(12));
console.log(spacifyNum(19));
console.log(spacifyNum(23));