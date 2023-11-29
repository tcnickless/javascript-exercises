const repeatString = function(text, repeatNumber) {
    let repeatedString = "";
    if (repeatNumber >= 0) {
        for (let i=0; i<repeatNumber; i++) {
            repeatedString += text;
        }
        return repeatedString;
    } else {
	return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
