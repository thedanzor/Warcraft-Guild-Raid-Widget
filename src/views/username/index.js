/**
 * Build character username element
 *
 * @param {Object} char - Character object from blizzard API
 */
module.exports = function (char) {
	var heading = document.createElement('h3');

	heading.innerHTML = char.name;

	return heading;
};
