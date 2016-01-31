/**
 * @module View Constructor Widget Header
 *
 * Displays guild information, such as title, realm and faction emblem
 */

module.exports = function (guild) {
	var widget = document.body.querySelector('#wow_widget');
	var name = guild.name;
	var faction = guild.side;
	var realm = guild.realm;

	// Faction is a boolean from Blizzard API, lets transform it to a string instead
	// 0 is alliance
	// 1 is horde
	if (faction === 0) {
		faction = 'alliance';
	} else {
		faction = 'horde';
	}

	// Lets build the dom elements we need to make the header work
	var guildLogo = document.createElement('div');
	var guildName = document.createElement('h1');
	var guildRealm = document.createElement('h2');
	var header = widget.querySelector('.wow_header');

	// Guild / Faction logo
	guildLogo.className = 'guildLogo';
	guildLogo.innerHTML = '<img src="./img/' + faction + '.png"/>';
	// Guild Title
	guildName.className = 'guildTitle';
	guildName.innerHTML = name;
	// Guild Realm
	guildRealm.className = 'guildRealm';
	guildRealm.innerHTML = realm;

	// Append it all
	header.appendChild(guildLogo);
	header.appendChild(guildName);
	header.appendChild(guildRealm);
};
