//= require <dom/reference>
o.dom.clear_opacity = function (node) {
	node.style.filter = node.style.opacity = '';
	return node;
};
