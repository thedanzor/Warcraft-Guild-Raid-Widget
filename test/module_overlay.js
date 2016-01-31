var expect = require('chai').expect;
var Test = require('../src/modules/overlay.js');

describe('Building Overlay', function () {
	context('show a user preview', function () {
		before(function (done) {

			var widget = document.createElement('div');
			var guild = {
				name: 'Sunfall',
				realm: 'emerald-dream'
			};
			var character = {
				name: 'test',
				fullPreview: 'test.jpg'
			};

			document.body.appendChild(widget);
			widget.id = 'wow_widget';
			Test(character);
			done();
		});

		it('Correct overlay image', function () {
			expect(document.querySelector('.user_preview').src).to.equal('https://render-api-eu.worldofwarcraft.com/static-render/eu/test.jpg');
			expect(document.querySelector('.overlayInner').className).to.equal('overlayInner');
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
