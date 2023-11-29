const removeFromArray = function(inputArray, valueToRemove) {
    let outPutArray = [];
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === valueToRemove) {
            outputArray = inputArray.splice(i);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
