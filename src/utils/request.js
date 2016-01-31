/**
 * @module Request Module
 */

 /**
  * Make a XMLHttpRequest to get data
  *
  * It expects Json response
  *
  * @param {String} url - path or url to json
  */
var request = function (url) {
	var request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send();

	// Parse data and return it
	return JSON.parse(request.responseText);
};

module.exports = request;
