const reverseString = function(string) {

    let newString = "";
    let counter = -1;
    for (let i = 1; i <= string.length; i++) {
        
        newString += string.at(counter);
        counter --;
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
