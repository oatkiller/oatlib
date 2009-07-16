//= require <dom/event/reference>
(function () {
 	var fn = function (add,node) {
		if (node.attachEvent) {
			add_property_name = $attachEvent;
			remove_property_name = $detachEvent;
			prefix = $on;
		} else {
			add_property_name = $addEventListener;
			remove_property_name = $removeEventListener;
		}
		return (fn = $$_dom_event_register = $$_dom_event.register = function (add,node,type,fn,bubble) {
			return node[add ? add_property_name : remove_property_name](prefix + type,fn,bubble);
		}).apply(this,arguments);
	},
	add_property_name,
	remove_property_name,
	prefix = emptyString;
	$$_dom_event_register = $$_dom_event.register = function () {
		return fn.apply(this,arguments);
	};
})();
