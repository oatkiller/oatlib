//= require <dom/event/reference>
//= require <K>
// pass the event object your handler was passed. this returns either the event if its passed, or window.event
(function () {
 	var fn;
	// makes it unit testable
	//($$_store($$_dom_event,$set_get_event,function () {
		fn = function (e) {
			return (fn = e ? $$_K : function () {return $$window[$event];})[$apply](this,arguments);
		};
	//}))();
	$$_store($$_dom_event,$get_event,function () {
		return fn[$apply](this,arguments);
	});
})();
