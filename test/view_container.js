var expect = require('chai').expect;
var Test = require('../src/views/container/index.js');

var footerCopyright = 'Guild Roster Application is designed &amp; coded by  <a href="http://the-danzor.deviantart.com/"> Scott Jones </a> | <a href="http://eu.battle.net/wow/en/character/emerald-dream/Holybarry/simple"> Holybarry</a> and is open sourced and free to download <a href="https://github.com/thedanzor/Warcraft-Guild-Raid-Widget">here</a><br> World of Warcraft is Copyright to Blizzard Entertainment,  API access is granted to the widget under Blizzards Terms of Services.  Changes to API may affect widget at anytime, use at your own risk.';

describe('Widget Container', function () {
	context('Building container for the widget', function () {
		before(function (done) {

			var widget = document.createElement('div');

			widget.id = 'wow_widget';
			document.body.appendChild(widget);

			Test();
			done();
		});

		it('Correct container elements', function () {
			expect(document.querySelector('.wow_footer').innerHTML).to.equal(footerCopyright);
			expect(document.querySelector('.wow_roster').className).to.equal('wow_roster');
			expect(document.querySelector('.wow_header').className).to.equal('wow_header');
			expect(document.querySelector('.wow_contentContainer').className).to.equal('wow_contentContainer');
			expect(document.querySelector('.wow_messages').className).to.equal('wow_messages');
			expect(document.querySelector('.rosterTitle').innerHTML).to.equal('Guild Raid Roster:');
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
