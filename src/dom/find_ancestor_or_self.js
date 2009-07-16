//= require <dom/reference>
$$_dom_find_ancestor_or_self = $$_dom.find_ancestor_or_self = function (node,fn,grandparent) {
	// test each ancestor until one passes the test, return that one
	var found = $$null,
	test = grandparent ? function (node) {
		var parent_node = node.parentNode;
		return parent_node && parent_node !== grandparent && parent_node;
	} : function (node) {
		return node.parentNode;
	};

	do {
		if (fn(node)) {
			found = node;
			return found;
		}
	} while (node = test(node))
	return false;
};
