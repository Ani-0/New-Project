// Question 41.
const checkNum=(num1, num2, num3)=>{
  if(num1 == num2 && num2 == num3){
    return 30;
  }else if(num1 == num2 || num2 == num3 || num3 == num1){
    return 40;
  };
  return 20;
}
console.log(checkNum(8, 8, 18));
// Question 42.
const checkIncreasing =(num1, num2, num3)=>{
  if(num1 < num2 && num2 < num3){
    return 'Strict Mode'
  }else if(num1 >= num2 && num2 < num3){
    return 'soft Mode'
  }else{
    return 'undefined'
  };
}
console.log(checkIncreasing(24, 22, 31));
// Question 43.
const threeNumber=(num1, num2, num3)=>{
  const firstNum = num1 % 10;
  const secondNum = num2 % 10;
  const threeNumbers = num3 % 10;
  if(firstNum === secondNum || secondNum === threeNumbers || threeNumbers === firstNum){
    return true;
  }else{
    return false;
  }
}
console.log(threeNumber(10, 22, 34));
console.log(threeNumber(23, 33, 43));
// Question 44.
const ThreeNum=(num1, num2, num3)=>{
  return (
    (num1 >= 20 && (num1 < num2 || num1 < num3))||
    (num2 >= 20 && (num2 < num1 || num2 < num3))||
    (num3 >= 20 && (num3 < num1 || num3 < num2))
  );
}
console.log(ThreeNum(23,45,21));
// Question 45.
const checkInteger=(num1, num2)=>{
  return (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2)===15);
};
console.log(checkInteger(15, 30));
//Question 46.
const getResult=(num1, num2)=>{
  const is1NumMultiple = num1 % 7 == 0 || num1 % 11 == 0;
  const is2NumMultiple = num2 % 7 == 0 || num2 % 11 == 0;
  return (is1NumMultiple && !is2NumMultiple) || (!is1NumMultiple && is2NumMultiple);
}
console.log(getResult(20, 30));
// Question 47.
const rangeNUmber =(num1)=>{
  if(num1 >= 40 && num1 <= 10000){
    return true;
  }else{
    return false;
  };
}
console.log(rangeNUmber(39));
// Question 48.
const reverseString=(str)=>{
  let reverseStr = '';
  for(let i = str.length -1; i >= 0;i--){
    reverseStr += str[i];
  }
  return reverseStr;
}
let originalString = 'hello';
let reversedString = reverseString(originalString);
console.log(`The reverse of '${originalString}' is "${reversedString}"`);
// Question 50.
const capitalize=(letter)=>{
  return letter.split(' ').map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  }).join(' ');
}
console.log(capitalize('aniket'));