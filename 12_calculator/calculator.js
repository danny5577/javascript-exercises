const add = function(a , b) {
	return a+b;
};

const subtract = function(a , b) {
	return a-b;
};

const sum = function(array) {
	let arraySum = array.reduce((prevVal,currrentVal) => prevVal + currrentVal , 0);
  return arraySum;
};

const multiply = function(array) {
  let arraySum = array.reduce((prevVal,currrentVal) => prevVal * currrentVal);
  return arraySum;
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {

let result = 1;

 for (let i = a; i > 0; i--) {
  result*=i;

 }

 return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
