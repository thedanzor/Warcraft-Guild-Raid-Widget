/**
 * @module Filter Members
 */

var grabReputation (input, reputation) {
	if (!input || !reputation) {
		return;
	}

	for (var i = 0; i < reputation.length; i++) {
		if (reputation[i].name === input) {
			var reputationArray = [];

			reputationArray.push(reputation[i].value);
			reputationArray.push(reputation[i].max);

			return reputationArray;
		}
	}

	return false;
};

module.exports = function (members, container) {
	if (!members || !container) {
		return;
	}

	for (var i = 0; i < members.length; i++) {
		// Build the wrappers
		// TODO: build a tempate engine
		var wrapper = document.createElement('div');
		var username = document.createElement('div');
		var raidProgress = document.createElement('div');
		var suramarProgress = document.createElement('div');
		var gear = document.createElement('div');

		wrapper.className = 'char-wrapper';
		username.className = 'char-username';
		raidProgress.className = 'char-raidprogress';
		suramarProgress.className = 'char-suramar'
		gear.className = 'char-gear';

		// Check reputation
		var rep = grabReputation('The Nightfallen', members[i].character.reputation);

		if (rep) {
			suramarProgress.innerHTML = 'Suramar: ' + rep[0] + '/' + rep[1];
		}

		// Check artifiact weapon
		var weapon = grabWeapon(members.items);

		// I am using innerHTML when the element is in memory and not in the DOM
		username.innerHTML = members.character.name;
		raidProgress.innerHTML = 'Heroic: ' + members[i].character.progression.raids[35].heroic +
								' / Mythic:' + members[i].character.progression.raids[35].mythic;

	}
};
