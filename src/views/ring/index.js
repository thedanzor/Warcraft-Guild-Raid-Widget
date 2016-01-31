/**
 * Build ring element
 *
 * @param {Boolean} ring - Ring fully upgraded
 */
module.exports = function (ring) {
	var ringElement = document.createElement('div');

	// Lets handle the ring message
	ringElement.innerHTML = 'No Upgraded Ring';
	ringElement.className = 'wow_ring';

	if (ring) {
		ringElement.innerHTML = '795 Ring';
	}

	return ringElement;
};
