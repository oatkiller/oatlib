//= require <dom/reference>
$$_dom_unhide_node = $$_dom.unhide_node = function (node) {
	node.style.display = emptyString;
	return node;
};

