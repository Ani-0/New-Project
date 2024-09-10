// Question 35.
const getChar=(string, char)=>{
  if(string.length < 4){
    return false;
  }
  for(let i = 1; i < 4;i++){
    if(string.charAt(i)==char){
      return true;
    }
  }
  return false;
}
console.log(getChar('Hello','l'));
// Question 36.
const checkPosition=(a, b, c)=>{
  let lastDigitA = a % 10;
  let lastDigitB = b % 10;
  let lastDigitC = c % 10;
  if(lastDigitA === lastDigitB && lastDigitB === lastDigitC){
    return true;
  }else{
    return false;
  }
}
let a = 123;
let b = 456;
let c = 789;
let result = checkPosition(a, b, c);
console.log(`The last digit of ${a}, and ${b} and ${c} are same: ${result}`);
// Question 37.
const modifyString = (str) => {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.substring(0, 3).toLowerCase() + str.substring(3);
  }
};
console.log(modifyString('Java')); 
console.log(modifyString('HelloWorld'));
// Question 38.
const getMarks=(FinalExamnumber,totalMark)=>{
  if(totalMark){
    return FinalExamnumber >= 90;
  }
  if(FinalExamnumber >= 89 && totalMark <= 100){
    return true;
  }else{
    return false;
  };
}
console.log(getMarks(90,95));
// Question 39.
const sumNum = (num1, num2)=>{
  let sumOf = num1 + num2;
  if(sumOf >= 50 && sumOf <= 80){
    return 65;
  }else{
    return 80;
  }
}
console.log(sumNum(25, 20));
// Question 40.
const diffrenceNum = (num1, num2)=>{
  if(num1 == 8 || num2 == 8){
    return true
  }
  if(num1 + num2 == 8 || Math.abs(num1 - num2) == 8){
    return true;
  }else{
    return false;
  }
} 
console.log(diffrenceNum(16 , 8));