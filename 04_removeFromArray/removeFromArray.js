const removeFromArray = function(inputArray, valueToRemove) {
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === valueToRemove) {
            let outputArray = inputArray.splice(i);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
