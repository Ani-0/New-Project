// Question 27.
function checkStr(str){
  if(str < 4){
    return false;
  }
  let start = str.slice(0, 4);
  if(start === 'Java'){
    return 'it dose';
  }else{
    return 'it not otherwise';
  }
};
console.log(checkStr('JavaAniket'));
// Question 28.
function twoInteger(num1, num2){
  if((num1 >= 50 && num1 <= 90)|| num2 >= 50 && num2 <= 90){
    return true;
  }else{
    return false;
  }
};
console.log(twoInteger(12,101));
console.log(twoInteger(52, 80));
// Question 29.
function threeNum(a, b, c){
  if((a >= 50 && a <= 90) || (b >= 50 && b <= 90)|| (c >= 50 && c <= 90)){
    return true;
  } else{
    return false;
  }
};
console.log(threeNum(54, 67, 101));
// Question 30.
function checkStr(letter){
  const target = 'Script';
  const position = 4;
  if(letter.slice(position, position + target.length)===target){
    return letter.slice(0, position) + letter.slice(position + target.length);
  }
  return letter;
};
console.log(checkStr('JavaScript is fun'));
// Question 31.
function largestNum(x, y, z){
  if(x > y && x > z){
   console.log(x, 'largest');
  }else if(y > x && y > z){
   console.log(y,'largest');
  }else if(z > x && z > y){
   console.log(z,'largest');
  };
}
largestNum(45,75,12);
// Question 32.
function closestValue(num1, num2){
  const diff1 = Math.abs(num1 - 100);
  const diff2 = Math.abs(num2 - 100);
  if(diff1 < diff2){
    return num1;
  }else if(diff2 < diff1){
    return num2;
  }else{
    return num1;
  }
}
console.log(closestValue(99, 110));
// Question 33.
function getRange(num1, num2){
  if((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60)|| (num2 >= 70 && num2 <= 100 && num1 >= 70 && num1 <= 100)){
    return true;
  }else{
    return false;
  };
}
console.log(getRange(55, 78));
// Question 34.
function getLargest (num1, num2){
  if(num1 > num2 && num1 >= 40 && num1 <= 60){
    return num1;
  }else if(num2 > num1 && num2 >= 40 && num2 <= 60){
    return num2;
  }else{
    return false;
  };
}
console.log(getLargest(41, 55));