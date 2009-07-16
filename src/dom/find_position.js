//= require <dom/reference>
$$_dom_find_position = $$_dom.find_position = function (node) {
	var sum_of_x = 0, sum_of_y = sum_of_x;
	if (node.offsetParent) {
		do {
			sum_of_x += node.offsetLeft;
			sum_of_y += node.offsetTop;
		} while (node = node.offsetParent);
		return {x: sum_of_x, y: sum_of_y};
	}
};
