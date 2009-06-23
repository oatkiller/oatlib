$$_store(function (element,type,fn,bubble) {
	$$_store(element[$addEventListener] ? function (element,type,fn,bubble) {
		return element[$addEventListener](type,fn,bubble);
	} : function (element,type,fn) {
		return element[$attachEvent]('on'+type,fn);
	},$add_event_handler)[$apply](this,arguments);
},$add_event_handler);
