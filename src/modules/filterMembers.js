/**
 * @module Filter Members
 */

// Var SetBonus = require('./setBonus.js');

var Request = require('../utils/request.js');
var Display = require('../views/display.js');
var GearCheck = require('./gearCheck.js');
var UpgradedRing = require('./upgradedRing.js');

var raidGroup = [];
var firstFilter = [];

var processRoster = function (roster, config) {
	var i = 0;

	// We use a function and settimeout to render the updates and items as they process.
	function getdata () {
		// Check gear and build elements we need for displaying
		var gearStatus = GearCheck(roster[i].items.averageItemLevelEquipped);
		var ringStatus = UpgradedRing(roster[i].items);
		var fullPreview = roster[i].thumbnail.replace('avatar', 'profilemain');

		// Render the character
		Display.character(roster[i], gearStatus, ringStatus, i, config);
		roster[i].fullPreview = fullPreview;
		config.roster = roster;

		i++;

		if (i === roster.length -1) {
			Display.messages('Completed', false);
			window.setTimeout(function () {
				console.log(config.roster);
				Display.messages('Completed', false);
			}, 2000);
		}

		Display.messages('Processing Raid Ready Characters ' + i + ' / ' + roster.length, true);

		if (i < roster.length) {
			window.setTimeout(getdata, 10);
		}
	}
	getdata();
};

 /**
  * filterMembers
  *
  * We look at the finger1 and finger2 to see if they have an upgraded ring
  *
  * @param {Object} members - array of guild members
  */
var level100s = function (members, config) {
	// We filter members by their rank and level
	for (var i = 0; i < members.length; i++) {
		if (members[i].character.level === 100 && (
			members[i].rank === config.guildSettings.rankFilter ||
			members[i].rank === config.guildSettings.rankFilter2 ||
			members[i].rank === config.guildSettings.rankFilter3 ||
			members[i].rank === config.guildSettings.rankFilter4 ||
			members[i].rank === config.guildSettings.rankFilter5 ||
			members[i].rank === config.guildSettings.rankFilter6 )) {
			firstFilter.push(members[i].character);
		}
	}

	return firstFilter;
};

var raidReadiness = function (members, config) {
	if (members) {
		// Lets provide feedback to users of the filtering progress
		Display.messages('Potentional Raid Members Found' + firstFilter.length, true);
		var i = 0;

		// We use a function and settimeout to render the updates and items as they process.
		function getdata () {

			Display.messages('Filtering Raid Members: ' + i + ' / ' + firstFilter.length +
				'<div class="wow_notice"> Sorry this may take a some time, ' +
				' blizzard API only accepts single requests for character data.  </div>', true);

			var apiRequest = config.apiSettings.region + '/wow/character/' +
				members[i].realm + '/' +
				members[i].name + '?fields=items&locale=en_GB&apikey=' + config.apiSettings.APIKey;
			var userData = Request(apiRequest);

			if (userData && userData.items &&
				userData.items.averageItemLevelEquipped > config.guildSettings.raidIlevel) {
				raidGroup.push(userData);
			}

			i++;

			if (i === firstFilter.length -1) {
				Display.messages('Raid Members Found' + raidGroup.length, true);
				processRoster(raidGroup, config);
			}

			if (i < firstFilter.length) {
				window.setTimeout(getdata, 10);
			}
		}
		getdata();
	} else {
		Display.messages('No Raid Members found', true);
		return false;
	}

};

var filterMembers = function (members, config) {
	if (members && members.length > 0) {
		var roster = level100s(members, config);

		return raidReadiness(roster, config);
	}
};

module.exports = filterMembers;
