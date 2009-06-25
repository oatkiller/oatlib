//= require <dom/event/base_modifier>
//= require <dom/event/reference>
//= require <curry>
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$removeEventListener] ? $$_event[$base_modifier][o[$curry]]($removeEventListener,emptyString) : $$_event[$base_modifier][o[$curry]]($detachEvent,$on),$remove_handler,[$dom,$event])[$apply]($this,arguments);
	},$remove_handler,[$dom,$event]);

})();

