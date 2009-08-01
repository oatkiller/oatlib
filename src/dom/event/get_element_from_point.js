//= require <dom/event/reference>
(o.dom.event.setup_get_element_from_point = function (my_document) {
	var fn = function (e) {
		return (fn = o.dom.event.get_element_from_point = e.pageX === undefined || e.x === undefined ? function (e) {
		//return (fn = o.dom.event.get_element_from_point = (!('pageX' in e) || !('x' in e)) ?  function (e) {
			return my_document.elementFromPoint(e.clientX,e.clientY);
		} : function (e) {
			return my_document.elementFromPoint(e.pageX,e.pageY);
		}).apply(this,arguments);
	};

	o.dom.event.get_element_from_point = function (e) {
		return fn.apply(this,arguments);
	};
})(document);
