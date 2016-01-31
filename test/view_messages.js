var expect = require('chai').expect;
var Test = require('../src/views/messages/index.js');

describe('Building view for messages', function () {
	context('Showing a message', function () {
		before(function (done) {

			var widget = document.createElement('div');
			var widgetMessage = document.createElement('div');

			document.body.appendChild(widget);

			widget.id = 'wow_widget';
			widgetMessage.className = 'wow_messages';
			widget.appendChild(widgetMessage);

			Test('Test Message', true);
			done();
		});

		it('Correct message and classname', function () {
			expect(document.querySelector('.wow_messages').innerHTML).to.equal('Test Message');
			expect(document.querySelector('.wow_messages').className).to.equal('wow_messages show');
		});
	});

	context('Hiding a message', function () {
		before(function (done) {

			var widget = document.createElement('div');
			var widgetMessage = document.createElement('div');

			document.body.appendChild(widget);

			widget.id = 'wow_widget';
			widgetMessage.className = 'wow_messages';
			widget.appendChild(widgetMessage);

			Test('Test Message', false);
			done();
		});

		it('Correct classes', function () {
			expect(document.querySelector('.wow_messages').className).to.equal('wow_messages hide');
		});
	});

	after(function (done) {
		document.body.innerHTML = '';
		done();
	});
});
