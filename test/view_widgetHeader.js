var expect = require('chai').expect;
var Test = require('../src/views/widgetHeader/index.js');
var Config = require('./stubs/config.js');

describe('Build the correct header', function () {
	context('Alliance Guild', function () {
		before(function (done) {

			var guild = {
				name: 'Sunfall',
				realm: 'emerald-dream',
				side: 0
			}
			var widget = document.createElement('div');
			var widgetContent = document.createElement('div');

			widget.id = 'wow_widget';
			widgetContent.className = 'wow_header';
			widget.appendChild(widgetContent);
			document.body.appendChild(widget);

			Test(guild, Config)

			done();
		});

		it('Build correct guild information', function () {
			expect(document.querySelector('.guildLogo').innerHTML).to.equal('<img src="./img/alliance.png">');
			expect(document.querySelector('.guildTitle').innerHTML).to.equal('Sunfall');
			expect(document.querySelector('.guildRealm').innerHTML).to.equal('emerald-dream');
		});

		after(function (done) {
			document.body.innerHTML = '';
			done();
		});

	});

	context('Horde Guild', function () {
		before(function (done) {

			var guild = {
				name: 'Sunfall',
				realm: 'emerald-dream',
				side: 1
			}
			var widget = document.createElement('div');
			var widgetContent = document.createElement('div');

			widget.id = 'wow_widget';
			widgetContent.className = 'wow_header';
			widget.appendChild(widgetContent);
			document.body.appendChild(widget);

			Test(guild, Config)

			done();
		});

		it('Build correct guild information', function () {
			expect(document.querySelector('.guildLogo').innerHTML).to.equal('<img src="./img/horde.png">');
			expect(document.querySelector('.guildTitle').innerHTML).to.equal('Sunfall');
			expect(document.querySelector('.guildRealm').innerHTML).to.equal('emerald-dream');
		});

		after(function (done) {
			document.body.innerHTML = '';
			done();
		});

	});
});
