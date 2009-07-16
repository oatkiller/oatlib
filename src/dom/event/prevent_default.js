//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = $$_dom_event_prevent_default = $$_dom_event.prevent_default = $preventDefault in e ? function (e) {return e.preventDefault();} : function (e) {return e.returnValue = $$false;}).apply(this,arguments);
	};
	$$_dom_event_prevent_default = $$_dom_event.prevent_default = function () {
		return fn.apply(this,arguments);
	};
})();
