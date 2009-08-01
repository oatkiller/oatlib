//= require <curry>
//= require <filter>
//= require <dom/event/reference>
//= require <dom/event/add_listener>
//= require <dom/contains>
(function () {

 	var filter_delegates_by_descendant,
	consider_delegates_for_node,
	delegates,
	garbage_collect_delegates_by_type,
	delegate_handler,
	add_delegate_handler_by_type,
	get_or_create_array_of_delegates_by_type;

	filter_delegates_by_descendant = o.dom.event.filter_delegates_by_descendant = function (delegates,descendant) {
		return o.filter(delegates,function (delegate) {
			return o.dom_contains(delegate.ancestor,descendant);
		});
	};
	consider_delegates_for_node = o.dom.event.consider_delegates_for_node = function (delegates,node,e,oe) {
		var filtered_delegates = delegates[o.filter](function (delegate) {
			if (!delegate.test(node,e,oe)) {
				return true;
			} else {
				oe.delegate_target = node;
				delegate.action(e,oe);
				return false;
			}
		}),
		new_node = node.parentNode;
		return filtered_delegates.length && new_node ? arguments.callee(filtered_delegates,new_node,e,oe) : true;
	};
	delegates = o.dom.event.delegates = [];
	garbage_collect_delegates_by_type = function (type) {
		return delegates[type] = delegates[type][o.filter](function (delegate) {
			return 'ancestor' in delegate;
		});
	};
 	delegate_handler = o.dom.event.delegate_handler = function (type,e,oe) {
		garbage_collect_delegates_by_type(type);
		var delegates_by_type = delegates[type],
		current_target = oe.get_target(),
		delegates_by_descendant;
		delegates_by_descendant = filter_delegates_by_descendant(delegates_by_type,current_target);
		return consider_delegates_for_node(delegates_by_descendant,current_target,e,oe);
	};
	add_delegate_handler_by_type = o.dom.event.add_delegate_handler_by_type = function (type) {
		o.dom.event.add_listener(document.body,type,delegate_handler[o.curry](type));
	};
	get_or_create_array_of_delegates_by_type = o.dom.event.get_or_create_array_of_delegates_by_type = function (type) {
		if (!delegates.hasOwnProperty(type)) {
			add_delegate_handler_by_type(type);
			delegates[type] = [];
		}
		return delegates[type];
	};
	o.dom.event.delegate = function (options) {
		var type = options.type || 'click',
		array_of_delegates = get_or_create_array_of_delegates_by_type(type),
		delegate_object = {
			test: options.test,
			action: options.action,
			ancestor: options.ancestor || document.body
		};
		array_of_delegates.push(delegate_object);
		return function () {
			delete delegate_object.ancestor;
		};
	};
})();
