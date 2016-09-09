/**
 * @module Filter Members
 */
module.exports = function (members, config) {
	if (!members) {
		return;
	}

	var roster = [];

	for (var i = 0; i < members.length; i++) {
		if (members[i].character.level === config.guildSettings.levelFilter) {
			roster.push(members[i]);
		}
	}

	return roster;
};
