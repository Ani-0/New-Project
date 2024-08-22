function leapYear(year){
    if(year %4 ===0){
     console.log("leapYear");
    }else if( year %100 === 0 && year %400 !== 0){
     console.log("No leapYear");
    }
 }
 leapYear(2000);