//= require <dom/reference>
//= require <dom/set_timeout>
//= require <dom/clear_timeout>
o.dom.debounce = function (fn,threshold) {
	var timer = false, args = arguments;
	threshold = threshold || 50;
	return function () {
		timer && o.dom.clear_timeout(timer);
		timer = o.dom.set_timeout(fn[o.bind](arguments),threshold);
	};
};
