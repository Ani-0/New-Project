let day = ["Monday", "Tuesday", "Wednesday", "Thuresday", "Friday", "Suterday", "Sunday"];
console.log("Today is :", day[4]);
const today = new Date();
const time = today.getHours();
const insecond = today.getMinutes()
const inMili = today.getMilliseconds();
console.log(`Current time is : ${time} : ${insecond} : ${inMili}`);