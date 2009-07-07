//= require <dom/reference>
$$_dom_element = $$_dom[$element] = function (id) {
	return $$document[$getElementById](id);
};
