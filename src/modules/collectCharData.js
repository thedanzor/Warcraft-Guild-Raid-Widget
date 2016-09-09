/**
 * @module Filter Members
 */
var Request = require('../utils/request');

module.exports = function (roster, config) {
	if (!roster || !config) {
		return;
	}

	var detailedRoster = [];

	for (var i = 0; i < roster.length; i++) {
		if (roster[i].character.level === config.guildSettings.levelFilter) {
			var apiRequest = config.apiSettings.region + '/wow/character/' +
				roster[i].character.realm + '/' +
				roster[i].character.name + '?fields=progression%2Creputation%2Citems&locale=en_GB&apikey=' +
				config.apiSettings.APIKey;
			var userData = Request(apiRequest);

			// If the response is not an error, push the response to an array
			if (!userData.status && userData.status !== 'nok') {
				detailedRoster.push(userData);
			}
		}
	}

	// return the array back to the application
	return detailedRoster;
};
