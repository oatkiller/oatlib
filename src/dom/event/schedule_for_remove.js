//= require <dom/event/reference>
//= require <dom/event/add_handler>
//= require <dom/event/remove_handler>
//= require <each>
$$_dom_event_events_to_remove = $$_dom_event.events_to_remove = [];
$$_dom_event_add_handler($$window,$unload,function () {
	$$_dom_event_events_to_remove[$$_o$each](function (args) {
		args.length && $$_dom_event_remove_handler.apply($$null,args);
	});
});
