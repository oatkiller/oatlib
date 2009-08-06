//= require <curry>
//= require <filter>
//= require <update>
//= require <dom/event/reference>
//= require <dom/event/add_listener>
//= require <dom/contains>
//= require <combine>
(function () {

 	var filter_delegates_by_descendant,
	consider_delegates_for_node,
	delegates,
	garbage_collect_delegates_by_type,
	delegate_handler,
	add_delegate_handler_by_type,
	get_or_create_array_of_delegates_by_type;

	var filter_delegates_by_descendant = function (delegates,descendant) {
		return delegates[o.filter](function (delegate) {
			return o.dom.contains(delegate.ancestor,descendant);
		});
	},
	// try the node and its ancestors against the delegates
	consider_delegates_for_node = function (delegates,node,e,oe) {
		var filtered_delegates = delegates[o.filter](function (delegate) {
			if (!delegate.test(node)) {
				return true;
			} else {
				oe.delegate_target = node;
				delegate.action(e,oe);
				return false;
			}
		}),
		new_node = node.parentNode;
		return filtered_delegates.length && new_node ? arguments.callee(filtered_delegates,new_node,e,oe) : true;
	},
	delegates = [],
	// updates the type array of type in delegates to disclude any delegates that dont have an ancestor property
	// ancestor property gets deleted by the function that delegate returns to the implementor
	garbage_collect_delegates_by_type = function (type) {
		delegates[type][o.update](delegates[type][o.filter](function (delegate) {
			return 'ancestor' in delegate;
		}));
	};
	// the event handler for all delegates. gets curried with type.
 	delegate_handler = function (type,e,oe) {
		garbage_collect_delegates_by_type(type);
		var delegates_by_type = delegates[type],
		current_target = oe.get_target(),
		delegates_by_descendant = filter_delegates_by_descendant(delegates_by_type,current_target);
		return consider_delegates_for_node(delegates_by_descendant,current_target,e,oe);
	},
	// add an event handler by a type to the body. register delegate handler
	add_delegate_handler_by_type = function (type) {
		o.dom.event.add_listener(document.body,type,delegate_handler[o.curry](type),true);
	},
	// if the delegates obj has an array at the property of typ, return that. else add an array at that property, add an event handler for that type. then return that property
	get_or_create_array_of_delegates_by_type = function (type) {
		if (!delegates.hasOwnProperty(type)) {
			add_delegate_handler_by_type(type);
			delegates[type] = [];
		}
		return delegates[type];
	},
	recall_with_different_type = function (options,type) {
		o.dom.event.delegate(o.combine({},options,{type: type}));
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

		var second_delete_function = options.type === 'focus' ? recall_with_different_type(options,'focusin') : options.type === 'blur' ? recall_with_different_type(options,'focusout') : function () {};

		return function () {
			second_delete_function();
			delete delegate_object.ancestor;
		};

	};
})();
