//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = o.dom.event.cancel = 'stopPropagation' in e ? function (e) {return e.stopPropagation();} : function (e) {return e.cancelBubble = true;}).apply(this,arguments);
	};
	o.dom.event.cancel = function () {
		return fn.apply(this,arguments);
	};
})();
