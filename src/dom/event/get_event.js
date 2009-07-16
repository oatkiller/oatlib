//= require <dom/event/reference>
// ie 8 sometimes passes event in as e and not as window.event. like in the case of onselectstart. i dunno if other ies do this, but prolly
$$_dom_event_get_event = $$_dom_event.get_event = function (e) {
	return e || $$window.event;
};
