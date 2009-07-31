//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = o.dom.event.get_mouse_coordinates = o.dom.event.get_mouse_coordinates = e.pageX ?  function (e) {
			return {x: e.pageX, y: e.pageY};
		} : function (e) {
			var document_body = document.body,
			document_element = document.documentElement;
			return {x: e.clientX + document_body.scrollLeft + document_element.scrollLeft,
				y: e.clientY + document_body.scrollTop + document_element.scrollTop};
		}).apply(this,arguments);
	};

	o.dom.event.get_mouse_coordinates = function (e) {
		return fn.apply(this,arguments);
	};
})();
