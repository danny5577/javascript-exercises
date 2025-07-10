const sumAll = function(a , b) {
    
    let max = Math.max(a , b);
    let min = Math.min(a, b);
    let result =0;

    if (a>=0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
        
    for (let i = min; i <= max; i++) {
         result += i;    
    }
    } else{
        return "ERROR";
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
