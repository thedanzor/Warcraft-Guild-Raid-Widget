var expect = require('chai').expect;
var Test = require('../src/views/username/index.js');

describe('Building view for character username', function () {
	context('User has the legendary ring', function () {
		before(function (done) {
			var char = {name: 'Holybarry'};

			this.dom = Test(char);
			done();
		});

		it('Correct username', function () {
			expect(this.dom.innerHTML).to.equal('Holybarry');
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
