//= require <dom/reference>
o.dom.remove = function (node) {
	return node.parentNode.removeChild(node);
};
