module.exports = function (message, status) {
	// Build dom objects we need for the widget
	var widget = document.body.querySelector('#wow_widget');
	var div = widget.querySelector('.wow_messages');

	if (status) {
		div.className = 'wow_messages show';
		div.innerHTML = message;
	} else {
		div.className = 'wow_messages hide';
	}
};
