//= require <dom/reference>
//= require <dom/get_scroll_offsets>
$$_dom_find_position = $$_dom.find_position = function (node) {
	var rect = node.getBoundingClientRect();
	var offests = $$_dom_get_scroll_offsets();
	return {
		y: rect.top + offests.y,
		x: rect.left + offests.x,
		rect: rect
	};
};
