//= require <dom/reference>
$$_dom_unhide = $$_dom.unhide = function (node) {
	node.style.display = emptyString;
	return node;
};

