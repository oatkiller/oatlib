//= require <dom/event/reference_to_event>
//= require <dom/event/add_event_listener>
$$_store(function () {

	$$_event[$add_event_listener]($$window,$unload,function () {$$_event[$purge]();});

},$schedule_purge,[$dom,$event]);
