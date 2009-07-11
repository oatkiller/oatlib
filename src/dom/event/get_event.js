//= require <dom/event/reference>
//= require <get_object_property>
//= require <rcurry>
//= require <K>
// pass the event object your handler was passed. this returns either the event if its passed, or window.event
(function () {
	var fn = function (e) {
		return (fn = e ? $$_K : $$_get_object_property[$$_o$rcurry]($event,$$window))[$apply](this,arguments);
	};
 	$$_dom_event_get_event = $$_dom_event[$get_event] = function () {
		return fn[$apply](this,arguments);
	};
})();
