//= require <builder>
//= require <dom/event/reference>
//= require <dom/event/get_event>
//= require <dom/event/get_button>
//= require <dom/event/get_key>
//= require <dom/event/get_mouse_coordinates>
//= require <dom/event/get_element_from_point>
//= require <dom/event/get_related_target>
//= require <dom/event/get_target>
//= require <dom/event/prevent_default>
//= require <dom/event/cancel>
//= require <curry>
//= require <array>

(function () {
 	var curry_with_this_dot_event = function (fn) {
		return function () {
			return fn.call(this,this.event);
		};
	},
	getter = o.builder({
		get_event: curry_with_this_dot_event(o.dom.event.get_event),
		get_button: curry_with_this_dot_event(o.dom.event.get_button),
		get_key: curry_with_this_dot_event(o.dom.event.get_key),
		get_mouse_coordinates: curry_with_this_dot_event(o.dom.event.get_mouse_coordinates),
		get_element_from_point: curry_with_this_dot_event(o.dom.event.get_element_from_point),
		get_related_mouseover_target: curry_with_this_dot_event(o.dom.event.get_related_mouseover_target),
		get_related_mouseout_target: curry_with_this_dot_event(o.dom.event.get_related_mouseout_target),
		get_target: curry_with_this_dot_event(o.dom.event.get_target),
		prevent_default: curry_with_this_dot_event(o.dom.event.prevent_default),
		cancel: curry_with_this_dot_event(o.dom.event.cancel)
	});
	o.dom.event.get_abstraction = function (e) {
		return getter({event: o.dom.event.get_event(e)});
	};
})();
