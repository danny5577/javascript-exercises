const fibonacci = function(number) {
if (number < 0) {
    return "OOPS";
}

if (number == 0) {
    return 0;
}

let firstPrevNum = 1;
let secondPrevNum = 0;

    for (let i = 2; i <= number; i++) {
        let currentNum = firstPrevNum + secondPrevNum;

        secondPrevNum = firstPrevNum;
        firstPrevNum= currentNum;
        
    }

    return firstPrevNum;

};

// Do not edit below this line
module.exports = fibonacci;
