//= require <dom/reference>
$$_dom_set_timeout = $$_dom[$set_timeout] = function (fn,time) {
	return $$window[$setTimeout](fn,time);
};
