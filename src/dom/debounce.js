//= require <dom/reference>
//= require <dom/set_timeout>
//= require <dom/clear_timeout>
$$_dom_debounce = $$_dom.debounce = function (fn,threshold) {
	var timer = false, args = arguments;
	threshold = threshold || 50;
	return function () {
		timer && $$_dom_clear_timeout(timer);
		timer = $$_dom_set_timeout(fn[$$_o$bind](arguments),threshold);
	};
};
