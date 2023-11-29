const removeFromArray = function(inputArray, valueToRemove) {
    for (i = 0; i = inputArray.length; i++) {
        if (inputArray[i] === valueToRemove) {
            inputArray.splice(i);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
