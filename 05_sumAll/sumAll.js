const sumAll = function(firstNumber, lastNumber) {
    let endSum = 0;

    for (i = firstNumber; i <= lastNumber; i++) {
        endSum += i;
    }
    return endSum;
};

// Do not edit below this line
module.exports = sumAll;
