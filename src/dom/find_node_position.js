//= require <dom/reference>
$$_dom_find_node_position = $$_dom.find_node_position = function (node) {
	var sum_of_x = sum_of_y = 0;
	if (node.offsetParent) {
		do {
			sum_of_x += node.offsetLeft;
			sum_of_y += node.offsetTop;
		} while (node = node.offsetParent);
		return {x: sum_of_x, y: sum_of_y};
	}
};
