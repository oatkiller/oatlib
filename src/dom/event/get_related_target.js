//= require <dom/event/reference>
//= require <get_object_property>
//= require <curry>
(function (fn_name,property) {

 // muahahah :)
	var fn = function (e) {
		return (fn = e[$relatedTarget] ? $$_get_object_property[$$_o$curry]($relatedTarget) : $$_get_object_property[$$_o$curry](property))[$apply](this,arguments);
	};

	$$_dom_event[fn_name] = function () {
		return fn[$apply](this,arguments);
	};

	return arguments[$callee];

})($get_related_mouseover_target,$fromElement)($get_related_mouseout_target,$toElement);
$$_dom_event_get_related_mouseover_target = $$_dom_event[$get_related_mouseover_target];
$$_dom_event_get_related_mouseout_target = $$_dom_event[$get_related_mouseout_target];
