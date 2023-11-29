const reverseString = function(text) {
    let textArray = text.split("");
    let reversedString = "";

    for (let i = text.length; i = 0; i--) {
        reversedString += textArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
