//= require <dom/event/reference>
// ie 8 sometimes passes event in as e and not as window.event. like in the case of onselectstart. i dunno if other ies do this, but prolly
// i tried to make this be conditional only once, but some browsers (made my ms) behave differently between certain events. so its to hard
(o.dom.event.setup_get_event = function (my_window) {
	o.dom.event.get_event = function (e) {
		return e || my_window.event;
	};
})(window);
