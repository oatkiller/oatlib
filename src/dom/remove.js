//= require <dom/reference>
$$_dom_remove = $$_dom.remove = function (node) {
	return node.parentNode.removeChild(node);
};
