/**
 * @module Stylesheet
 */

/**
 * Load a Stylesheet file into the DOM.
 *
 * @param {string} stylesheet - contains the url to the stylesheet
 */
module.exports = function (stylesheet) {
	// Check if stylesheet is already loaded and just return if so
	var onPage = document.querySelector('link[href="' + stylesheet + '"]');

	if (onPage) {
		return;
	}
	var link = document.createElement('link');

	link.setAttribute('href', stylesheet);
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('type', 'text/css');

	document.querySelector('head').appendChild(link);
};
