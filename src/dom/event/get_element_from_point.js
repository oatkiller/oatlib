//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = o.dom.event.get_element_from_point = (!('pageX' in e) || !('x' in e)) ?  function (e) {
			return document.elementFromPoint(e.clientX,e.clientY);
		} : function (e) {
			return document.elementFromPoint(e.pageX,e.pageY);
		}).apply(this,arguments);
	};

	o.dom.event.get_element_from_point = function (e) {
		return fn.apply(this,arguments);
	};
})();
