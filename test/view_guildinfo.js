var expect = require('chai').expect;
var Test = require('../src/views/guildInfo/index.js');
var Config = require('./stubs/config.js');

describe('Building view for guildInfo', function () {
	context('Raid and Guild information', function () {
		before(function (done) {

			var guild = {
				name: 'Sunfall',
				realm: 'emerald-dream'
			}
			var widget = document.createElement('div');
			var widgetContent = document.createElement('div');

			widget.id = 'wow_widget';
			widgetContent.className = 'wow_contentContainer';
			widget.appendChild(widgetContent);
			document.body.appendChild(widget);

			Test(guild, Config)

			done();
		});

		it('Build correct guild information', function () {
			expect(document.querySelector('.guildRecruitmentStatus').innerHTML).to.equal(' <i class="icon-info"> </i> Guild is currently recruiting');
			expect(document.querySelector('.guildProgress').innerHTML).to.equal('5/13');
			expect(document.querySelector('.guildWebsite').innerHTML).to.equal('<a href="' + Config.guildInfo.website + '"> Visit The Website </a>');
			expect(document.querySelector('.guildDesc').innerHTML).to.equal('line1<br> <br>line2');
			expect(document.querySelector('.raidInfoHeader').innerHTML).to.equal(Config.guildInfo.currentRaid);
		});

		after(function (done) {
			document.body.innerHTML = '';
			done();
		});

	});

	context('Raid and Guild information Not recruiting', function () {
		before(function (done) {
			Config.guildInfo.recruiting = false;
			var guild = {
				name: 'Sunfall',
				realm: 'emerald-dream'
			}
			var widget = document.createElement('div');
			var widgetContent = document.createElement('div');

			widget.id = 'wow_widget';
			widgetContent.className = 'wow_contentContainer';
			widget.appendChild(widgetContent);
			document.body.appendChild(widget);

			Test(guild, Config)

			done();
		});

		it('Build correct guild information', function () {
			expect(document.querySelector('.guildRecruitmentStatus').innerHTML).to.equal(' <i class="icon-info"> </i> Guild is currently NOT recruiting');
		});

		after(function (done) {
			document.body.innerHTML = '';
			done();
		});

	});

});
