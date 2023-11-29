const sumAll = function(numberX, numberY) {
    let endSum = 0;

    // throw error if input is out of bounds (negative)
    if ((numberX || numberY) < 0) {
        return 'ERROR';
    }
    // throw error if types are not INT
    if (!Number.isInteger(numberX) || !Number.isInteger(numberY)) {
        return 'ERROR';
    }

    // sanitise input for iterating over
    if (numberX > numberY) {
	firstNumber = numberY;
	lastNumber = numberX;
    } else {
	firstNumber = numberX;
	lastNumber = numberY;
    }

    for (i = firstNumber; i <= lastNumber; i++) {
        endSum += i;
    }
    return endSum;
};

// Do not edit below this line
module.exports = sumAll;
