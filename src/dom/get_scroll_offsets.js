//= require <dom/reference>
//= require <error>
//= require <curry>

(function () {
	var fn = function () {
		return (fn = $$_dom_get_scroll_offsets = $$_dom.get_scroll_offsets =  typeof window.pageYOffset == 'number' ? function () {
			return {
				y: window.pageYOffset,
				x: window.pageXOffset
			};
		} :  document.body && (document.body.scrollLeft || document.body.scrollTop) ? function () {
			return {
				y: document.body.scrollTop,
				x: document.body.scrollLeft
			};
		} :  document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) ? function () {
			return {
				y: document.documentElement.scrollTop,
				x: document.documentElement.scrollLeft
			};
		} : $$_error[$$_o$curry]('frickt')).apply(this,arguments);
	};
	$$_dom_get_scroll_offsets = $$_dom.get_scroll_offsets = function () {
		return fn.apply(this.arguments);
	};
})();
