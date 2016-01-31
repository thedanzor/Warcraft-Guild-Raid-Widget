
/**
 * Create the Widget Container
 */
var WidgetContainer = function () {
	// Build dom objects we need for the widget
	var widget = document.body.querySelector('#wow_widget');
	var header = document.createElement('div');
	var container = document.createElement('div');
	var messages = document.createElement('div');
	var footer = document.createElement('div');
	var roster = document.createElement('div');
	var guild = document.createElement('div');
	var rosterTitle = document.createElement('h1');

	header.className = 'wow_header';
	container.className = 'wow_contentContainer';
	messages.className = 'wow_messages';
	footer.className = 'wow_footer';
	roster.className = 'wow_roster';
	guild.className = 'wow_guild';
	rosterTitle.className = 'rosterTitle';

	widget.innerHTML = '<div id="bg1"></div> <div id="bg2"></div> <div id="bg3"></div>' +
		' <div class="widgetWrapper"> </div>';
	rosterTitle.innerHTML = 'Guild Raid Roster:';

	var wrapper = widget.querySelector('.widgetWrapper');

	wrapper.appendChild(header);
	container.appendChild(roster);
	roster.appendChild(rosterTitle);
	roster.appendChild(messages);
	container.appendChild(footer);
	wrapper.appendChild(container);

	// Leave disclaimer / Foooter unedited under Terms of Use
	footer.innerHTML = 'Guild Roster Application is designed & coded by ' +
	' <a href="http://the-danzor.deviantart.com/"> Scott Jones </a> | '+
	'<a href="http://eu.battle.net/wow/en/character/emerald-dream/Holybarry/simple"> Holybarry</a>' +
	' and is open sourced and free to download ' +
	'<a href="https://github.com/thedanzor/Warcraft-Guild-Raid-Widget">here</a>' +
	'<br /> World of Warcraft is Copyright to Blizzard Entertainment, ' +
	' API access is granted to the widget under Blizzards Terms of Services. ' +
	' Changes to API may affect widget at anytime, use at your own risk.';

	return true;
};

// Export our prototype
module.exports = WidgetContainer;
