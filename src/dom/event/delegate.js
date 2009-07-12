//= require <curry>
//= require <filter>
//= require <dom/event/reference>
//= require <dom/event/add_listener>
//= require <dom/contains>
(function () {

	$$_dom_event_filter_delegates_by_descendant = $$_dom_event[$filter_delegates_by_descendant] = function (delegates,descendant) {
		return $$_filter(delegates,function (delegate) {
			return $$_dom_contains(delegate[$ancestor],descendant);
		});
	};
	$$_dom_event_consider_delegates_for_node = $$_dom_event[$consider_delegates_for_node] = function (delegates,node,e,oe) {
		var filtered_delegates = delegates[$$_o$filter](function (delegate) {
			if (delegate[$ancestor] === node) {
				return $$false;
			} else if (!delegate[$test](node,e,oe)) {
				return $$true;
			} else {
				oe[$delegate_target] = node;
				delegate[$action](e,oe);
				return $$false;
			}
		}),
		new_node = node[$parentNode];
		return filtered_delegates[$length] && new_node ? arguments[$callee](filtered_delegates,new_node,e,oe) : $$true;
	};
	$$_dom_event_delegates = $$_dom_event[$delegates] = [];
 	$$_dom_event_delegate_handler = $$_dom_event[$delegate_handler] = function (type,e,oe) {
		var delegates_by_type = $$_dom_event_delegates[type],
		current_target = oe[$get_target](),
		delegates_by_descendant = $$_dom_event_filter_delegates_by_descendant(delegates_by_type,current_target);
		$$_dom_event_consider_delegates_for_node(delegates_by_descendant,current_target,e,oe);
	};
	$$_dom_event_add_delegate_handler_by_type = $$_dom_event[$add_delegate_handler_by_type] = function (type) {
		$$_dom_event_add_listener($$document[$body],type,$$_dom_event_delegate_handler[$$_o$curry](type));
	};
	$$_dom_event_get_or_create_array_of_delegates_by_type = $$_dom_event[$get_or_create_array_of_delegates_by_type] = function (type) {
		if (!$$_dom_event_delegates[$hasOwnProperty](type)) {
			$$_dom_event_add_delegate_handler_by_type(type);
			$$_dom_event_delegates[type] = [];
		}
		return $$_dom_event_delegates[type];
	};
	$$_dom_event_delegate = $$_dom_event[$delegate] = function (options) {
		var type = options[$type],
		array_of_delegates = $$_dom_event_get_or_create_array_of_delegates_by_type(type);
		array_of_delegates[$push]({
			test: options[$test],
			action: options[$action],
			ancestor: options[$ancestor]
		});
	};
})();
