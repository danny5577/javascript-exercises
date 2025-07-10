const removeFromArray = function(array, ...element) {

    let newArr = array.filter((item) => !element.includes(item));
   
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
