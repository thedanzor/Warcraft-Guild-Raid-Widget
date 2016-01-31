/**
 * @module View Constructor Item
 *
 * Build a character item for the roster list view
 */

var Overlay = require('../../modules/overlay.js');
var BuildRing = require('../ring/index.js');
var BuildImage = require('../displayImage/index.js');
var BuildTitle = require('../username/index.js');

/**
 * Create the Character component.
 *
 * @param {Object} char - Character object from blizzard API
 * @param {Object} gear - Gear score DOM Element
 * @param {Boolean} ring - Ring fully upgraded
 * @param {Num} id - ID Assigned per character based on Interger
 * @param {Object} config - Config Object from config.json
 */
var Character = function (char, gear, ring, id, config) {
	this.options = config;

	// Container
	var widget = document.body.querySelector('#wow_widget');
	var container = widget.querySelector('.wow_roster');

	// Character Dom wrapper
	var div = document.createElement('div');
	var charDiv = document.createElement('div');
	var charId = document.createElement('div');
	var clearBoth = document.createElement('div');

	// Assign ID and classname to DOM element
	div.id = id;
	div.className = 'wow_item ' + char.name;
	charId.className = 'charId';
	charDiv.className = 'char';

	// clearBoth dom element
	clearBoth.setAttribute('style', 'clear:both;');

	// Construct ring element
	var characterRing = BuildRing(ring);
	var displayImage = BuildImage(char);
	var heading = BuildTitle(char);

	// Lets start appending and building everything
	div.appendChild(displayImage);
	div.appendChild(charDiv);
	charDiv.appendChild(heading);
	charDiv.appendChild(gear);
	charDiv.appendChild(characterRing);
	div.appendChild(clearBoth);

	container.appendChild(div);
	div.appendChild(charId);

	// Event for when a character is clicked
	div.addEventListener('click', function (event) {
		var targetChar = this.options.roster[event.target.parentNode.id];

		Overlay(targetChar);
	}.bind(this));

	// Lets add a nice transition effect to the items
	div.setAttribute('style', 'opacity:0;');
	setTimeout( function () {
		div.setAttribute('style', 'opacity:1;');
	}, 300);
};

// Export our prototype
module.exports = Character;
