//Question 1.
const listofDay = ['Sunday','Monday','Tuesday','wednesday','Thursday','Friday','Suterday']
const day = new Date();
const Output = day.getDay();
console.log('today is: '+listofDay[Output]+'.');
const hour = day.getHours();
const minutes = day.getMinutes();
const second = day.getSeconds();
console.log(`${hour}PM:${minutes}:${second}`);
//Question 2.  Write a JavaScript program to print the current window contents.  
// print (window);
//Question 3. Write a JavaScript program to get the current date.
const mmddyyyy = `${day.getMonth()+1}-${day.getDate()}-${day.getFullYear()}`;
const ddmmyyy = `${day.getMonth()+1}/${day.getDate()}/${day.getFullYear()}`;
console.log('mm-dd-yyyy: ',mmddyyyy);
console.log('mm/dd/yyyy',ddmmyyy);
// Question 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
let a = 5;
let b = 6;
let c = 7;
console.log(a + b + c);
// Question 6.Leap Year Defined 
function leapYear(Year){
  if(Year % 4 == 0 && Year % 400 == 0){
    console.log('Leap Year');
  }else if(Year % 100 === 0){
    console.log('Not LeapYear')
  }else{
    console.log('error');
  }
}
leapYear(2000);
//Queation 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
for(let year = 2014; year <= 2050;year++){
  const January1st = new Date(year, 0, 1);
  if(January1st.getDay()===0){
    console.log(`January 1st,${year} is Sunday`);
  }
}
// Question 8.Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
function getRendom(number){
    if(number < 10){
       console.log('Good Work')
    }else{
      console.log('Not Matched');
    }
  return number;
}
getRendom(11);

const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt('Enter a number between 1 and 10'));

if (userGuess === randomNumber) {
  console.log('Good Work');
} else {
  console.log(`Not matched. The correct answer was ${randomNumber}.`);
}
// Question 9.Write a JavaScript program to calculate the days left before Christmas. 
const currentDate = new Date();
const ChristmasDate = new Date(currentDate.getFullYear(),11,25);
const differenceInMilliseconds = ChristmasDate.getTime()-currentDate.getTime();
const daysLeft = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));
console.log(`There are ${daysLeft} day left before Christmas`);

// Question 10.
const Firstnumber = document.getElementById('Firstnumber');
const Secondnumber =document.getElementById('Secondnumber');
const Result = document.getElementById('Result');
function buttonPress(){
    Num = Firstnumber.value * Secondnumber.value;
    Result.innerText = Num;
    Num = Firstnumber.value / Secondnumber.value;
    Result.innerHTML = Num;
}