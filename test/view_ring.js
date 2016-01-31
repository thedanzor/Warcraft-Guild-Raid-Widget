var expect = require('chai').expect;
var Ring = require('../src/views/ring/index.js');

describe('Building view for legendary Ring', function () {
	context('User has the legendary ring', function () {
		before(function (done) {
			var ring = true;

			this.dom = Ring(ring);
			done();
		});

		it('Correct message', function () {
			expect(this.dom.innerHTML).to.equal('795 Ring');
		});
	});

	context('User does NOT have the legendary ring', function () {
		before(function (done) {
			var ring = false;

			this.dom = Ring(ring);
			done();
		});

		it('Correct message', function () {
			expect(this.dom.innerHTML).to.equal('No Upgraded Ring');
		});
	});
	
	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
