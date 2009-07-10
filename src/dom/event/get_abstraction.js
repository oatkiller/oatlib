//= require <builder>
//= require <dom/event/reference>
//= require <dom/event/get_event>
//= require <dom/event/get_button>
//= require <dom/event/get_key>
//= require <dom/event/get_mouse_coordinates>
//= require <dom/event/get_related_target>
//= require <dom/event/get_target>
//= require <dom/event/prevent_default>
//= require <dom/event/cancel>
//= require <curry>
//= require <array>
(function () {
 	var curry_with_this_dot_event = function (fn) {
		return function () {
			return fn[$apply](this,[this[$event]][$concat]($$_array(arguments)));
		};
	},
	getter = $$_builder({
		get_event: curry_with_this_dot_event($$_dom_event_get_event),
		get_button: curry_with_this_dot_event($$_dom_event_get_button),
		get_key: curry_with_this_dot_event($$_dom_event_get_key),
		get_mouse_coordinates: curry_with_this_dot_event($$_dom_event_get_mouse_coordinates),
		get_related_target: curry_with_this_dot_event($$_dom_event_get_related_target),
		get_target: curry_with_this_dot_event($$_dom_event_get_target),
		prevent_default: curry_with_this_dot_event($$_dom_event_prevent_default),
		cancel: curry_with_this_dot_event($$_dom_event_cancel)
	});
	$$_dom_event_get_abstraction = $$_dom_event[$get_abstraction] = function (e) {
		return getter({event: e});
	};
})();
