//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = o.dom.event.prevent_default = 'preventDefault' in e ? function (e) {return e.preventDefault();} : function (e) {return e.returnValue = false;}).apply(this,arguments);
	};
	o.dom.event.prevent_default = function () {
		return fn.apply(this,arguments);
	};
})();
