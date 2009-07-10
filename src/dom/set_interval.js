//= require <dom/reference>
$$_dom_set_interval = $$_dom[$set_interval] = function (fn,time) {
	return $$window[$setInterval](fn,time);
};
