const leapYears = function(year) {

    let leapYear = 0;

  if (year % 4 ==0) {  
     leapYear = year;
   

  if (leapYear %400 == 0 || leapYear % 100 !==0) {
    return true;
  }
}
  return false;

};

// Do not edit below this line
module.exports = leapYears;
