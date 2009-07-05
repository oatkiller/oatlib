//= require <dom/event/reference>
//= require <get_object_property>
//= require <curry>
(function (fn_name,property) {

 // muahahah :)
	var fn = function (e) {
		return (fn = e[$relatedTarget] ? $$_get_object_property[o[$curry]]($relatedTarget) : $$_get_object_property[o[$curry]](property))[$apply](this,arguments);
	};

	$$_dom_event[fn_name] = function () {
		return fn[$apply](this,arguments);
	};

	return arguments.callee;

})($get_related_mouseover_target,$fromElement)($get_related_mouseout_target,$toElement);
