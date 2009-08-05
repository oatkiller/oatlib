//= require <dom/reference>
//= require <dom/remove>
o.dom.update = function (node,fragment) {
	while (node.childNodes.length) {
		o.dom.remove(node.firstChild);
	};
	node.appendChild(fragment);
	return node;
};
