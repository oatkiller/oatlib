//= require <dom/reference>
//= require <error>
//= require <curry>
(function () {

	var fn = function () {
		return (fn = o.dom.get_window_size = (typeof window.innerHeight === 'number') ? function () {
			return {width: window.innerWidth, height: window.innerHeight};
		} : (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) ? function () {
			//IE 6+ in 'standards compliant mode'
			return {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight};
		} : (document.body && (document.body.clientWidth || document.body.clientHeight)) ? function () {
			//IE 4 compatible
			return {width: document.body.clientWidth, height: document.body.clientHeight};
		} : o.error[o.curry]('cant get window size')).apply(this,arguments);
	};

	o.dom.get_window_size = function () {
		return fn.apply(this,arguments);
	};

})();
