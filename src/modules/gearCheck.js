/**
 * @module Gear itemlevel check
 */

 /**
  * checkGear
  *
  * We give it the item level of the user and proceed to build a dom element from it
  *
  * @param {Num} itemLevel - itemLevel
  */
var checkGear = function (itemLevel) {
	var gearStatus = document.createElement('div');

	gearStatus.innerHTML = itemLevel;

	// Check how to best style / indicate this element
	if (itemLevel > 810 && itemLevel < 720) {
		gearStatus.className = 'normal';
	} else if (itemLevel > 819 && itemLevel < 730) {
		gearStatus.className = 'heroic';
	} else if (itemLevel > 740) {
		gearStatus.className = 'mythic';
	} else {
		gearStatus.className = 'lfr';
	}

	return gearStatus;
};

module.exports = checkGear;
