var expect = require('chai').expect;
var Test = require('../src/modules/gearCheck.js');

describe('Checking the gear of the player', function () {
	context('Low Item Level', function () {
		before(function (done) {
			this.dom = Test(701);
			this.dom2 = Test(715);
			this.dom3 = Test(730);
			this.dom4 = Test(685);
			done();
		});

		it('Correct gear type', function () {
			expect(this.dom.className).to.equal('normal');
			expect(this.dom2.className).to.equal('heroic');
			expect(this.dom3.className).to.equal('mythic');
			expect(this.dom4.className).to.equal('lfr');
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
