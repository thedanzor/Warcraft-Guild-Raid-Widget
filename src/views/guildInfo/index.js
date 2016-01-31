/**
 * @module View Constructor Guild Info
 *
 * Displays guild information, such as raid progress, guild desc, recruitement info etc
 */

module.exports = function (guild, config) {
	// Create the dom elements
	var widget = document.body.querySelector('#wow_widget');
	var raidInfo = document.createElement('div');
	var raidImage = '<img src="./img/' + config.guildInfo.poster + '" alt="" class="raidImage" />';
	var raidInfoHeader = document.createElement('h3');
	var guildWebsite = document.createElement('div');
	var guildProgress = document.createElement('div');
	var guildDesc = document.createElement('p');
	var raidInfoRecruit = document.createElement('h4');

	// Add classes
	raidInfo.className = 'raidInfo';
	guildWebsite.className = 'guildWebsite';
	guildProgress.className = 'guildProgress';
	raidInfoRecruit.className = 'guildRecruitmentStatus';
	guildDesc.className = 'guildDesc';
	raidInfoHeader.className = 'raidInfoHeader';
	raidInfo.innerHTML = raidImage;

	// Start appending them
	raidInfo.appendChild(guildProgress);
	raidInfo.appendChild(raidInfoHeader);
	raidInfo.appendChild(raidInfoRecruit);
	raidInfo.appendChild(guildDesc);
	raidInfo.appendChild(guildWebsite);

	// Set recruiting options
	if (config.guildInfo.recruiting) {
		raidInfoRecruit.innerHTML = ' <i class="icon-info"> </i> Guild is currently recruiting';
	} else {
		raidInfoRecruit.innerHTML = ' <i class="icon-info"> </i> Guild is currently NOT recruiting';
	}

	// Add guild website
	if (config.guildInfo.website) {
		guildWebsite.innerHTML = '<a href="' + config.guildInfo.website + '"> Visit The Website </a>';
		guildWebsite.className += ' show';
	}

	// Add some raid and progress information to elements
	raidInfoHeader.innerHTML = config.guildInfo.currentRaid;
	guildProgress.innerHTML = config.guildInfo.progress;
	guildDesc.innerHTML = config.guildInfo.desc + '<br /> </br/>' + config.guildInfo.desc2;

	// Lets append this at the start of the widget container
	var parent = widget.querySelector('.wow_contentContainer');

	raidInfo.setAttribute('style', 'opacity: 0;');
	parent.insertBefore(raidInfo, parent.firstChild);

	// Transition the element in
	setTimeout( function () {
		raidInfo.setAttribute('style', 'opacity:1;');
	}, 300);
};
