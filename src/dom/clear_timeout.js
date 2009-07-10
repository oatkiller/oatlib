//= require <dom/reference>
$$_dom_clear_timeout = $$_dom[$clear_timeout] = function (payload) {
	return $$window[$clearTimeout](payload);
};
