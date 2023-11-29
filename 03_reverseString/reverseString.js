const reverseString = function(text) {
    let splitString = text.split("");
    let reversedString = "";

    let reversedArray = splitString.reverse();
    reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
