//= require <dom/event/reference_to_event>
//= require <dom/event/add_event_handler>
//= require <dom/event/schedule_purge>

(function () {
	var event_listeners = $$_store([],$event_listeners,[$dom,$event]);

	$$_store(function (node,type,fn,bubble) {

		event_listeners.push(arguments);

		o[$dom][$event][$schedule_purge]();

		return $$_event[$add_event_handler][$apply](this,arguments);

	},$add_event_listener,[$dom,$event]);
})();
