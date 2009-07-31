//= require <dom/reference>
o.dom.unhide = function (node) {
	node.style.display = empty_string;
	return node;
};

