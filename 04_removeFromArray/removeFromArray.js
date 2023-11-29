const removeFromArray = function(inputArray) {
    // for every argument, excluding the initial array
    for (j = 1; j <= arguments.length; j++) {
        // for every element of inputArray
        for (i = 0; i < inputArray.length; i++) {
            // check if argument J matches the array element
            // if a match, remove the element
            if (inputArray[i] === arguments[j]) {
                inputArray.splice(i, 1);
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
