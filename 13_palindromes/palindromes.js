const palindromes = function (str) {
     const newStr = str.split('').reverse().join('');
     return newStr === str;

};

// Do not edit below this line
module.exports = palindromes;
