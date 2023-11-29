const leapYears = function(year) {

	// check for leap century and return true, but return false if a regular century
	if ( ((year % 100) === 0)  &&  ((year % 400) === 0)  ) {
		return true;
	} else if ((year % 100) === 0) {
		return false;
	}

	// check for regular leapness
	if ((year % 4) === 0) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = leapYears;
