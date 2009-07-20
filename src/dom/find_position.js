//= require <dom/reference>
$$_dom_find_position = $$_dom.find_position = function (node) {
	var rect = node.getBoundingClientRect();
	return {
		y: rect.top,
		x: rect.left
	};
};
