/**
 * @module Filter Members
 */
var checkuser = require('../modules/charCheck');

var grabReputation = function (input, reputation) {
	if (!input || !reputation) {
		return;
	}

	for (var i = 0; i < reputation.length; i++) {
		if (reputation[i].name === input) {
			var reputationArray = [];

			reputationArray.push(reputation[i].value);
			reputationArray.push(reputation[i].max);

			if (reputation[i].value >= 8000 & reputation[i].max >= 12000) {
				reputationArray.push('Has Access');
			} else {
				reputationArray.push('No Access');
			}

			return reputationArray;
		}
	}

	return false;
};

var grabWeapon = function (items) {
	// Get the upgrade level:
	if (!items || !items.mainHand) {
		return 'error';
	}

	var mainhand = items.mainHand;
	var upgrades = 0;
	var weaponstats = [];

	// Vaidate the mainhand artifact
	if (mainhand.artifactId) {
		for (var i = 0; i < mainhand.artifactTraits.length; i ++) {
			upgrades = upgrades + mainhand.artifactTraits[i].rank;
		}
	}

	weaponstats.push(upgrades);
	weaponstats.push(mainhand.relics.length);

	return weaponstats;
};

module.exports = function (members, container) {
	if (!members || !container) {
		return;
	}

	var characterDomArray = [];

	for (var i = 0; i < members.length; i++) {
		if (!members[i].name) {
			console.log('ERROR: A character was parsed that has invalid data, no name or information found. ' +
			'This can happen when the character is no longer in the guild or on the realm');
		} else {
			// Build the wrappers
			// TODO: build a tempate engine
			var wrapper = document.createElement('div');
			var username = document.createElement('div');
			var raidProgress = document.createElement('div');
			var suramarProgress = document.createElement('div');
			var gear = document.createElement('div');
			var gearScore = document.createElement('div');

			wrapper.className = 'char-wrapper';
			username.className = 'char-username';
			raidProgress.className = 'char-raidprogress';
			suramarProgress.className = 'char-suramar'
			gear.className = 'char-gear';
			gearScore.className = 'char-gearscore';

			// Check reputation
			var rep = grabReputation('The Nightfallen', members[i].reputation);

			if (rep) {
				suramarProgress.innerHTML = '<span>Suramar:</span> ' + rep[0] + '/' + rep[1] + ' / ' + rep[2];
			}

			// Check artifiact weapon
			var weapon = grabWeapon(members[i].items);

			if (weapon === 'error') {
				console.log('ERROR: The character (' + members[i].name + ') seems to be invalid, in this case their weapon is not equiped');
			} else {
				// Check the item level equiped.
				var itemlevel = members[i].items.averageItemLevelEquipped;

				var userQuality = checkuser(itemlevel, rep, weapon);

				username.className += ' ' + userQuality;

				// I am using innerHTML when the element is in memory and not in the DOM
				username.innerHTML = members[i].name;
				raidProgress.innerHTML = '<span>Raid Progress - Heroic:</span> ' + members[i].progression.raids[35].heroic +
										' / <span>Mythic:</span> ' + members[i].progression.raids[35].mythic;
				gear.innerHTML = '<span>Weapon Rank:</span> ' + weapon[0] + ' / Relic Slots used: ' + weapon[1];
				gearScore.innerHTML = '<span>' + itemlevel + '</span> ilvl';

				wrapper.appendChild(username);
				wrapper.appendChild(gearScore);
				wrapper.appendChild(gear);


				if (rep) {
					wrapper.appendChild(suramarProgress);
				}

				wrapper.appendChild(raidProgress);
				container.appendChild(wrapper);
			}
		}
	}

	container.querySelector('.message').innerHTML = 'Has processed ' + members.length + ' enteries from the guild roster.';
};
