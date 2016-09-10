/**
 * @module Character status quality check check
 */

module.exports = function (itemlevel, rep, weapon) {
	if (!itemlevel || !rep || !weapon) {
		return ' poor';
	}

	var score = 0;
	var classname;

	if (itemlevel >= 840) {
		score++
	}

	if (rep[0] >= 8000 & rep[1] >= 12000) {
		score++
	}

	if (weapon[1] === 3) {
		score++
	}

	if (score === 3) {
		classname = 'epic';
	} else if (score === 2) {
		classname = 'good';
	} else {
		classname = 'poor';
	}

	return classname;
};
