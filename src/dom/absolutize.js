//= require <dom/reference>
//= require <dom/find_position>
//= require <dom/get_style>
//= require <curry>
o.dom.absolutize = function (node) {
	
	// get position 
	var position = o.dom.find_position(node),
	offset_width = node.offsetWidth,
	offset_height = node.offsetHeight;

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
