/**
 * @module upgradedRing
 */

 /**
  * upgradedRing
  *
  * We look at the finger1 and finger2 to see if they have an upgraded ring
  *
  * @param {Object} gear - gear object of the user
  */
var upgradedRing = function (gear) {
	var ring;

	if (gear.hasOwnProperty('finger1')) {
		ring = gear.finger1.itemLevel;
		if (ring === 795) {
			return true;
		}
	}

	if (gear.hasOwnProperty('finger2')) {
		ring = gear.finger2.itemLevel;
		if (ring === 795) {
			return true;
		}
	} else {
		return false;
	}
};

module.exports = upgradedRing;
