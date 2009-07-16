//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = $$_dom_event_cancel = $$_dom_event.cancel = $stopPropagation in e ? function (e) {return e.stopPropagation();} : function (e) {return e.cancelBubble = $$false;}).apply(this,arguments);
	};
	$$_dom_event_cancel = $$_dom_event.cancel = function () {
		return fn.apply(this,arguments);
	};
})();
