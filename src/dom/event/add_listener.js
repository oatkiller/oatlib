//= require <dom/event/reference>
//= require <dom/event/add_handler>
//= require <dom/event/schedule_purge>

(function () {
	var event_listeners = $$_store([],$event_listeners,[$dom,$event]);

	$$_store(function (node,type,fn,bubble) {

		event_listeners.push(arguments);

		$$_event[$schedule_purge]();

		return $$_event[$add_handler][$apply](this,arguments);

	},$add_listener,[$dom,$event]);
})();
