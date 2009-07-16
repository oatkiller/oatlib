//= require <dom/reference>
$$_dom_get_element_at_point = $$_dom.element_at_point = function (coordinates) {
	return document.elementFromPoint(coordinates.x,coordinates.y);
};
