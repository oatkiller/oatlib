//= require <dom/reference>
$$_dom_find_descendant_or_self = $$_dom.find_descendant_or_self = function (node,fn) {
	// test each descendant until one passes the test, return that one
	return (fn(node) && node) || (function () {
		var childNodes = node.childNodes, i = 0, length = childNodes.length, result;
		for (; i < length; i++) {
			if (result = $$_dom_find_descendant_or_self(childNodes[i],fn)) {
				return result;
			}
		}
	})();
};
