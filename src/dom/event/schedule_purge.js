//= require <dom/event/reference>
//= require <dom/event/add_listener>
//= require <dom/event/purge>
$$_store(function () {

	$$_store(function () {},$schedule_purge,[$dom,$event]);

	$$_event[$add_listener]($$window,$unload,function () {$$_event[$purge]();});

},$schedule_purge,[$dom,$event]);
