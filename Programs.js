const today = new Date();
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuresday",
  "Friday",
  "Suterday",
  "Sunday",
];
const Day = today.getDay();
console.log("Today is", days[Day]);
const hour = today.getHours();
const insecond = today.getMinutes();
const inMili = today.getSeconds();
console.log(`Current time is : ${hour} : ${insecond} : ${inMili}`);
