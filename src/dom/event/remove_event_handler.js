//= require <dom/base_event_modifier>
//= require <curry>
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$removeEventListener] ? o[$dom][$base_event_modifier][o[$curry]]($removeEventListener,emptyString) : o[$dom][$base_event_modifier][o[$curry]]($detachEvent,$on),$remove_event_handler,[$dom])[$apply]($this,arguments);
	},$remove_event_handler,[$dom]);

})();

