//= require <dom/event/reference>
//= require <dom/event/remove_listener>
//= require <each>

$$_store(function () {
	$$_event[$event_listeners][o[$each]](function (args) {
		$$_event[$remove_listener][$apply]($$null,args);
	});
},$purge,[$dom,$event]);
