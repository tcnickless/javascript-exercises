const reverseString = function(text) {
    // splits string into array, reverses array, and then joins array elements together into string
    reversedString = text.split("").reverse().join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
