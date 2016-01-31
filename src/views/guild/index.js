var Header = require('../widgetHeader/index.js');
var GuildInfo = require('../guildInfo/index.js');

var guild = function (guild, config) {
	Header(guild, config);
	GuildInfo(guild, config);
};

module.exports = guild;
