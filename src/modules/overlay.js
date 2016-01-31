module.exports = function (char) {
	// Build dom objects we need for the widget
	var widget = document.body.querySelector('#wow_widget');
	var close = document.createElement('div');
	var overlay = document.createElement('div');
	var overlayInner = document.createElement('div');
	var preview = document.createElement('img');

	overlay.className = 'overlay';
	close.innerHTML = 'X';
	overlayInner.className = 'overlayInner';
	preview.src = 'https://render-api-eu.worldofwarcraft.com/static-render/eu/' +
		char.fullPreview;
	preview.className = 'user_preview';

	overlay.appendChild(overlayInner);
	overlayInner.appendChild(preview);
	overlayInner.appendChild(close);
	widget.appendChild(overlay);
};
