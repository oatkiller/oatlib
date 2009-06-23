//= require <base_event_modifier>
//= require <curry>
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$addEventListener] ? o[$base_event_modifier][o[$curry]]($addEventListener,emptyString) : o[$base_event_modifier][o[$curry]]($attachEvent,$on),$add_event_handler)[$apply]($this,arguments);
	},$add_event_handler);

})();

