//= require <dom/reference>
o.dom.set_dimensions = function (node,dimensions) {
	node.style.width = dimensions.width + 'px';
	node.style.height = dimensions.height + 'px';
	return node;
};
