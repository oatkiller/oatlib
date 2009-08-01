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
//= require <for_each>

(function () {
 	var curry_with_this_dot_event = function (fn) {
		return function () {
			return fn.call(this,this.event);
		};
	},
	prototype = {
		get_event: o.dom.event.get_event,
		get_button: o.dom.event.get_button,
		get_key: o.dom.event.get_key,
		get_mouse_coordinates: o.dom.event.get_mouse_coordinates,
		get_element_from_point: o.dom.event.get_element_from_point,
		get_related_mouseover_target: o.dom.event.get_related_mouseover_target,
		get_related_mouseout_target: o.dom.event.get_related_mouseout_target,
		get_target: o.dom.event.get_target,
		prevent_default: o.dom.event.prevent_default,
		cancel: o.dom.event.cancel
	},
	my_builder;
	o.for_each(prototype,function (value,key) {
		prototype[key] = curry_with_this_dot_event(value);
	});
	my_builder = o.builder(prototype);
	o.dom.event.get_abstraction = function (e) {
		return my_builder({event: o.dom.event.get_event(e)});
	};
})();
