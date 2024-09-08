// Question 11.
function getFahrenheit(Celsius){
  Celsius = (Celsius * 9/5) + 32;
  return Celsius;
}
console.log(getFahrenheit(60));
//Question 13.
// const Name = prompt('Enter your Name');
// console.log(Name);
// Question 15.
function diffrenceNum (Num){
  if(Num <= 13){
    return Num - 13;
  }else{
    return (Num - 13) * 2
  }
};
console.log(diffrenceNum(24));
// Question 16.
function sumNumber(FirstNum, SecondNum){
   if(FirstNum === SecondNum){
      return 3 * FirstNum + SecondNum;
   }else{
    return FirstNum + SecondNum;
   }
};
console.log(sumNumber(10, 10));
//Question 17.
const specifiedNumber=(number)=>{
  const Num = 19;
  if(number >= Num){
    return 3 * Num - number;
  }else{
    return Num - number;
  }
};
console.log(specifiedNumber(22));
// Question 18;
const checkPair = (num1, num2)=>{
  if((num1 == 50 || num2 == 50) || (num1 + num2 == 50)){
    return true;
  }else{
    return false;
  }
}
console.log(checkPair(20, 20));
//Question 19.
function getNum(num){
  return (Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20);
}
console.log(getNum(70));
//Question 20.
function getInput(a, b){
  if ((a > 0 && b < 0) || (a < 0 && b > 0)){
    return true;
  }else{
    return false;
  }
};
console.log(getInput(2,-2));