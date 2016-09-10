/**
 * Utilities
 */
var Request = require('./utils/request');
var FilterMembers = require('./modules/filterMembers');
var collectCharData = require('./modules/collectCharData');
var buildCharacterViews = require('./views/displayChar');

// APPLICATION START
var launchApp = function (config) {
	if (config) {
		var guild;
		var container = document.querySelector('#wow_widget');

		var guildURL = config.apiSettings.region +
			'/wow/guild/' +
			config.guildSettings.guild +
			'?fields=members&locale=en_GB&apikey=' +
			config.apiSettings.APIKey;

		// Get Guild information from blizzard
		guild = Request(guildURL);

		// If guild is found we proceed with the widget
		if (guild) {
			var roster = FilterMembers(guild.members, config); // build a valid roster

			if (roster) {
				var rosterData = collectCharData(roster, config);

				if (rosterData) {
					buildCharacterViews(rosterData, container);
				}
			}
		}
	}
};

// Lets start the widget
// Method to check if the document is ready
launchApp(Request('./config.json'));
