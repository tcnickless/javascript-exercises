const removeFromArray = function(inputArray) {
    for (j = 1; j <= arguments.length; j++) {
        for (i = 0; i < inputArray.length; i++) {   
                if (inputArray[i] === arguments[j]) {
                    inputArray.splice(i, 1);
                }
            }
        }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
