//= require <dom/reference>
//= require <dom/find_position>
//= require <dom/get_style>
//= require <curry>
o.dom.absolutize = function (node) {
	
	// get position 
	var position = o.dom.find_position(node);

	// this fn uses algebra to guess the apropriate width

	var original_width = parseFloat(node.offsetWidth),
	original_height = parseFloat(node.offsetHeight);

	node.style.width = original_width + 'px';
	node.style.height = original_height + 'px';

	var horizontal_padding = parseFloat(node.offsetWidth) - original_width,
	vertical_padding = parseFloat(node.offsetHeight) - original_height;

	var offset_width = original_width - horizontal_padding,
	offset_height = original_height - vertical_padding;

	// set to absolute
	node.style.position = 'absolute';

	// move to body
	document.body.appendChild(node);

	// reposition
	node.style.top = position.y + 'px';
	node.style.left = position.x + 'px';
	node.style.width = offset_width + 'px';
	node.style.height = offset_height + 'px';
	node.style.margin = '0';
	return position;

};
