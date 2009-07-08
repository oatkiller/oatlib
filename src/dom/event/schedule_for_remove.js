//= require <dom/event/reference>
//= require <dom/event/add_handler>
//= require <each>
$$_dom_event_events_to_remove = $$_dom_event[$events_to_remove] = [];
$$_dom_even_add_handler($$window,$unload,function () {
	$$_dom_event_events_to_remove[$$_o$each](function (args) {
		$$_dom_event_remove_handler[$apply]($$null,args);
	});
});
