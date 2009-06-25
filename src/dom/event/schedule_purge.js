//= require <dom/event/reference>
//= require <dom/event/add_listener>
$$_store(function () {

	$$_event[$add_listener]($$window,$unload,function () {$$_event[$purge]();});

},$schedule_purge,[$dom,$event]);
