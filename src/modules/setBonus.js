/**
 * @module Set Bonus module
 */

 /**
  * setBonus
  *
  * We give it an users items object and we go through them to check for set bonus
  *
  * @param {Object} gear - gear object of the user
  */
var setBonus = function (gear) {
	// Cycle through all the item
	for (var key in gear) {

		// We want to ignore these values from this list
		if (key !== 'averageItemLevel' || key !== 'averageItemLevelEquipped') {
			// We know the item, now we want to know its item level
			if (items.hasOwnProperty(key)) {
				var obj = items[key].tooltipParams;

				if (obj.hasOwnProperty('set')) {
					return items[key].tooltipParams.set.length;
				}

			}
		}
	}
};

module.exports = setBonus;
