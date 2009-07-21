//= require <dom/reference>
//= require <error>
//= require <curry>
(function () {

	var fn = function () {
		return (fn = $$_dom_get_window_size = $$_dom.get_window_size = (typeof window.innerHeight === 'number') ? function () {
			return {width: window.innerWidth, height: window.innerHeight};
		} : (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) ? function () {
			//IE 6+ in 'standards compliant mode'
			return {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight};
		} : (document.body && (document.body.clientWidth || document.body.clientHeight)) ? function () {
			//IE 4 compatible
			return {width: document.body.clientWidth, height: document.body.clientHeight};
		} : $$_error[o.curry]("can't get window size")).apply(this,arguments);
	};

	$$_dom_get_window_size = $$_dom.get_window_size = function () {
		return fn.apply(this,arguments);
	};
})();
