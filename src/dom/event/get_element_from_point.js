//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = $$_dom_event_get_element_from_point = $$_dom_event.get_element_from_point = (!('pageX' in e) || !('x' in e)) ?  function (e) {
			return document.elementFromPoint(e.clientX,e.clientY);
		} : function (e) {
			return document.elementFromPoint(e.pageX,e.pageY);
		}).apply(this,arguments);
	};

	$$_dom_event_get_element_from_point = $$_dom_event.get_element_from_point = function (e) {
		return fn.apply(this,arguments);
	};
})();
