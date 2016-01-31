var expect = require('chai').expect;
var Test = require('../src/views/displayImage/index.js');

describe('Building view for character avatar', function () {
	context('Build a user avatar', function () {
		before(function (done) {
			var char = {thumbnail: 'Holybarry.jpg'};

			this.dom = Test(char);
			done();
		});

		it('Correct avatar', function () {
			expect(this.dom.src).to.equal('https://render-api-eu.worldofwarcraft.com/static-render/eu/Holybarry.jpg');
			expect(this.dom.className).to.equal('item_avatar');
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
