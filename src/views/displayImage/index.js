/**
 * Build avatar element
 *
 * @param {Object} char - Character object from blizzard API
 */
module.exports = function (char) {
	var displayImage = document.createElement('img');

	displayImage.src = 'https://render-api-eu.worldofwarcraft.com/static-render/eu/' +
		char.thumbnail;
	displayImage.className = 'item_avatar';

	return displayImage;
};
