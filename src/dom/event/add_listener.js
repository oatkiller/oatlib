//= require <dom/event/reference>
//= require <dom/event/schedule_for_remove>
//= require <dom/event/remove_handler>
//= require <dom/event/get_abstraction>
//= require <splice>
//= require <bind>
$$_dom_event_add_listener = $$_dom_event[$add_listener] = function (node,type,fn,bubble) {

	var wrapped_fn = function (e) {
		return fn[$call](this,e,$$_dom_event_get_abstraction(e));
	},
	args = [node,type,wrapped_fn,bubble];
	$$_dom_event_add_handler[$apply]($$null,args);

	// register event for removal at page unload
	$$_dom_event_events_to_remove[$push](args);
	return function () {
		// remove the args from the array of args scheduled from remove. 
		// then remove them args :)
		return $$_dom_event_remove_handler[$apply]($$null,args);
	};
};
