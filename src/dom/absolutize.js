//= require <dom/reference>
//= require <dom/find_position>
//= require <dom/get_style>
//= require <curry>
$$_dom_absolutize = $$_dom.absolutize = function (node) {
	
	// get position 
	var position = $$_dom_find_position(node);

	// set to absolute
	node.style.position = 'absolute';

	// move to body
	document.body.appendChild(node);

	// reposition
	node.style.top = position.y + 'px';
	node.style.left = position.x + 'px';
	return position;

};
