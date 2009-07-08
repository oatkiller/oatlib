//= require <dom/event/reference>
//= require <dom/event/get_event>
//= require <curry>
//= require <array>
(function () {
 	var curry_with_this_dot_event = function (fn) {
		return fn[$apply](this,[this[$event]][$concat]($$_array(arguments)));
	},
	getter = $$_builder({
		get_event = curry_with_this_dot_event($$_dom_event_get_event),
		get_button: curry_with_this_dot_event($$_dom_event_get_button),
		get_key: curry_with_this_dot_event($$_dom_event_get_key),
		get_mouse_coordinates: curry_with_this_dot_event($$_dom_event_get_mouse_coordinates),
		get_related_target: curry_with_this_dot_event($$_dom_event_get_related_target),
		get_target: curry_with_this_dot_event($$_dom_event_get_target)
	});
	$$_dom_event_get_abstraction = $$_dom_event[$get_abstraction] = function (e) {
		return getter({event: e});
	};
})();
