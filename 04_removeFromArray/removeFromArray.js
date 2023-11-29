const removeFromArray = function(inputArray, valueToRemove) {
    let outPutArray = [];
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === valueToRemove) {
            inputArray.splice(i, 1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
