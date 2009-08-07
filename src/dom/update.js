//= require <dom/reference>
//= require <dom/empty>
o.dom.update = function (node,fragment) {
	o.dom.empty(node);
	node.appendChild(fragment);
	return node;
};
