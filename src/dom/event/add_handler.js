//= require <dom/event/base_modifier>
//= require <dom/event/reference>
//= require <curry>
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$addEventListener] ? $$_event[$base_modifier][o[$curry]]($addEventListener,emptyString) : $$_event[$base_modifier][o[$curry]]($attachEvent,$on),$add_handler,[$dom,$event])[$apply]($this,arguments);
	},$add_handler,[$dom,$event]);

})();

