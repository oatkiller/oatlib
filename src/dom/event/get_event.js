//= require <dom/event/reference>
//= require <get_object_property>
//= require <curry>
//= require <K>
// pass the event object your handler was passed. this returns either the event if its passed, or window.event
(function () {
	// makes it unit testable
 	//var fn;
	//($$_store($$_dom_event,$set_get_event,function () {
	// if running that test, remove var from next line !!!!
		var fn = function (e) {
			return (fn = e ? $$_K : $$_get_object_property[$$_o$curry]($event,$$window))[$apply](this,arguments);
		};
	//}))();
 	$$_dom_event_get_event = $$_dom_event[$get_event] = function () {
		return fn[$apply](this,arguments);
	};
})();
