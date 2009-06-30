//= require <dom/event/reference>
//= require <dom/event/add_handler>
//= require <dom/event/schedule_purge>
//= require <dom/event/get_event>
(function () {

 	$$_event_listeners = $$_store([],$event_listeners,[$dom,$event]);

	$$_store(function (node,type,fn,bubble) {

		var handler = function () {
			var e = $$_get_event,
			that = node,
			code = $$_get_code;



		},
		cancel_args = [node,type,handler,bubble];

		$$_event_listeners.push(cancel_args);

		$$_event[$schedule_purge]();

		$$_event[$add_handler][$apply](this,arguments);

		return function () {
			return o[$dom][$event][$remove_listener][apply]($$null,cancel_args);
		};

	},$add_listener,[$dom,$event]);

})();
