var expect = require('chai').expect;
var Test = require('../src/modules/upgradedRing.js');

describe('Checking the ring upgrade status', function () {
	context('Checking finger1 and finger2', function () {
		before(function (done) {
			var gear1 = {
				finger1: {
					itemLevel: 685
				},
				finger2: {
					itemLevel: 685
				}
			};
			var gear2 = {
				finger1: {
					itemLevel: 795
				},
				finger2: {
					itemLevel: 685
				}
			};
			var gear3 = {
				finger1: {
					itemLevel: 685
				},
				finger2: {
					itemLevel: 795
				}
			};

			this.ring = Test(gear1);
			this.ring2 = Test(gear2);
			this.ring3 = Test(gear3);

			done();
		});

		it('Should return true and false', function () {
			expect(this.ring).to.equal(undefined);
			expect(this.ring2).to.equal(true);
			expect(this.ring3).to.equal(true);
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
