const repeatString = function(text, repeatNumber) {
    let repeatedString = "";
    for (let i=0; i<repeatNumber; i++) {
	    repeatedString += text;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
