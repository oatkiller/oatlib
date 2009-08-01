//= require <dom/event/reference>
//= require <get_object_property>
//= require <rcurry>
(o.dom.event.setup_get_related_target = function () {
	(function (fn_name,property) {

	 // muahahah :)
		var fn = function (e) {
			return (fn = e.relatedTarget ? o.get_object_property[o.rcurry]('relatedTarget') : o.get_object_property[o.rcurry](property)).apply(this,arguments);
		};

		o.dom.event[fn_name] = function () {
			return fn.apply(this,arguments);
		};

		return arguments.callee;

	})('get_related_mouseover_target','fromElement')('get_related_mouseout_target','toElement');
})();
