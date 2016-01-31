var expect = require('chai').expect;
var Test = require('../src/views/char/index.js');
var Config = require('./stubs/config.js');

describe('Widget Character Item Container', function () {
	context('Building the container', function () {
		before(function (done) {

			var widget = document.createElement('div');
			var guild = {
				name: 'Sunfall',
				realm: 'emerald-dream'
			};
			var character = {
				name: 'test'
			};
			var gear = document.createElement('div');
			var widgetContent = document.createElement('div');

			widgetContent.className = 'wow_roster';
			gear.innerHTML = 730;
			gear.className = 'mythic';

			widget.id = 'wow_widget';
			widget.appendChild(widgetContent);
			document.body.appendChild(widget);

			Test(character, gear, true, 0, Config);
			done();
		});

		it('Testing output', function () {
			expect(document.querySelector('.wow_item').className).to.equal('wow_item test');
			expect(document.querySelector('.charId').className).to.equal('charId');
			expect(document.querySelector('.char').className).to.equal('char');
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
