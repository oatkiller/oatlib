//= require <dom/reference>
//= require <dom/remove>
o.dom.empty = function (node) {
	while (node.childNodes.length) {
		o.dom.remove(node.firstChild);
	};
	return node;
};
