$$_dom_remove_node = $$_dom[$remove_node] = function (node) {
	return node[$parentNode][$removeChild](node);
};
