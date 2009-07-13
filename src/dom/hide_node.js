//= require <dom/reference>
$$_dom_hide_node = $$_dom[$hide_node] = function (node) {
	node[$style][$display] = $none;
	return node;
};
