//= require <dom/reference>
$$_dom_hide = $$_dom.hide = function (node) {
	node.style.display = $none;
	return node;
};
