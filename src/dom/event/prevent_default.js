//= require <dom/event/reference>
(o.dom.event.setup_prevent_default = function () {
	var fn = function (e) {
		return (fn = o.dom.event.prevent_default = e.preventDefault !== undefined ? function (e) {return e.preventDefault();} : function (e) {return e.returnValue = false;}).apply(this,arguments);
	};
	o.dom.event.prevent_default = function () {
		return fn.apply(this,arguments);
	};
})();
