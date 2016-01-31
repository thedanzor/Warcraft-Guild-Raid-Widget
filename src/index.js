/**
 * Utilities
 */

var Request = require('./utils/request.js');
var FilterMembers = require('./modules/filterMembers.js');
var Stylesheet = require('./utils/style.js');
var Display = require('./views/display.js');

// WIDGET START
// GLOBAL VARIABLES (HANDY)
var readyCheckMax = 10;
var consoleTitle = 'WoW Guild Widget Error';

var launchApp = function (config) {
	if (config) {
		// Request Guild Information
		var guild;

		var guildURL = config.apiSettings.region +
			'/wow/guild/' +
			config.guildSettings.guild +
			'?fields=members&locale=en_GB&apikey=' +
			config.apiSettings.APIKey;

		// Display a loading message to users, true means to show, false to hide messages
		window.setTimeout( function () {
			Display.messages('loading guild information', 'true');
		}, 100);

		// Get Guild information from blizzard
		guild = Request(guildURL);

		// If guild is found we proceed with the widget
		if (guild) {
			// Guilds are pretty big, lets filter the raiders only
			window.setTimeout( function () {
				Display.messages('Filtering Guild Members', 'true');
			}, 100);
			Display.processGuild(guild, config);
			FilterMembers(guild.members, config);
		} else {
			console.log(consoleTitle + ' >>>>> No Valid API Key or Guild Found');
			Display.messages('No Valid API Key or Guild Found', 'true');
		}
	} else {
		console.log(consoleTitle + ' >>>>> no config found');
		Display.messages('No Config Found', 'true');
	}
};

// Lets start the widget
// Method to check if the document is ready
Stylesheet('./css/widget.css');

var readyCheck = function () {
	if (Display.container()) {
		Display.messages('Preparing Application', 'true');

		var documentReady = document.readyState === 'interactive' ||
			document.readyState === 'complete' ||
			window.self !== window.top;

		if (documentReady || !readyCheckMax) {
			launchApp(Request('./config.json'));
		} else {
			setTimeout(readyCheck, 200);
			--readyCheckMax;
		}
	}
};

// We will check if the document is ready for this app to be loaded.
readyCheck();
