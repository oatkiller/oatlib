//= require <dom/base_event_modifier>
//= require <curry>
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$addEventListener] ? o[$dom][$base_event_modifier][o[$curry]]($addEventListener,emptyString) : o[$dom][$base_event_modifier][o[$curry]]($attachEvent,$on),$add_event_handler,[$dom])[$apply]($this,arguments);
	},$add_event_handler,[$dom]);

})();

