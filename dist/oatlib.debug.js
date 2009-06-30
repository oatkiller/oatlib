(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_namespace, $length = 'length', $slice = 'slice', $$_store, $toString = 'toString', $$_dom, $dom = 'dom', $$_event, $event = 'event', $base_modifier = 'base_modifier', $$_slice, $apply = 'apply', $array = 'array', $call = 'call', $concat = 'concat', $bind = 'bind', $$null = null, $curry = 'curry', $addEventListener = 'addEventListener', $attachEvent = 'attachEvent', $on = 'on', $add_handler = 'add_handler', $this = 'this', $schedule_purge = 'schedule_purge', $add_listener = 'add_listener', $$window = window, $unload = 'unload', $purge = 'purge', $event_listeners = 'event_listeners', $take = 'take', $$_join, $join = 'join', $hasOwnProperty = 'hasOwnProperty', $memoize = 'memoize', $$RegExp = RegExp, $regex = 'regex', $string = 'string', $$_class_name_test_regex, $test = 'test', $className = 'className', $has_class_name = 'has_class_name', $parentNode = 'parentNode', $find_ancestor_or_self = 'find_ancestor_or_self', $nodeName = 'nodeName', $$true = true, $ancestor = 'ancestor', $action = 'action', $type = 'type', $target = 'target', $relatedTarget = 'relatedTarget', $$false = false, $contains = 'contains', $delegate = 'delegate', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
o,
emptyArray = [];
$$_function_prototype = $$Function[$prototype];
$$_array_prototype = $$Array[$prototype];
$$_namespace = function (ra,obj) {
	obj = obj || o;
	if (!ra[$length]) {
		return obj;
	}
	if (ra[0] in obj) {
		return $$_namespace(ra[$slice](1),obj[ra[0]]);
	} else {
		for (var i = 0, length = ra[$length], propertyName; i < length; i++) {
			propertyName = ra[i];
			obj[propertyName] = {};
			obj = obj[propertyName];
		}
		return obj;
	}
};
(function () {
 	var qname,
	namespace_obj;
	$$_store = function (fn,name,namespace,obj) {
		namespace_obj = $$_namespace(namespace || []);
		if (obj) {
			qname = o(name);
			obj[qname] = fn;
			namespace_obj[name] = qname;
		} else {
			namespace_obj[name] = fn;
		}
		return fn;
	};
})();

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
$$_dom = $$_namespace([$dom]);
$$_event = $$_namespace([$event],$$_dom);

$$_store(function (propertyName,prefix,element,type,fn,bubble) {
	return element[propertyName](prefix + type,fn,bubble);
},$base_modifier,[$dom,$event]);

$$_slice = $$_array_prototype[$slice];
$$_store(function (arrayLike) {
	return $$_slice[$apply](arrayLike);
},$array);
$$_store(function (obj) { // holds the logic for curry
	var that = this,
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat](o[$array](arguments)));
	};
},$bind,emptyArray,$$_function_prototype);
$$_store(function () {
	return this[o[$bind]][$apply](this,[$$null][$concat](o[$array](arguments)));
},$curry,emptyArray,$$_function_prototype);
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$addEventListener] ? $$_event[$base_modifier][o[$curry]]($addEventListener,emptyString) : $$_event[$base_modifier][o[$curry]]($attachEvent,$on),$add_handler,[$dom,$event])[$apply]($this,arguments);
	},$add_handler,[$dom,$event]);

})();

$$_store(function () {

	$$_store(function () {},$schedule_purge,[$dom,$event]);

	$$_event[$add_listener]($$window,$unload,function () {$$_event[$purge]();});

},$schedule_purge,[$dom,$event]);

(function () {
	var event_listeners = $$_store([],$event_listeners,[$dom,$event]);

	$$_store(function (node,type,fn,bubble) {

		event_listeners.push(arguments);

		$$_event[$schedule_purge]();

		return $$_event[$add_handler][$apply](this,arguments);

	},$add_listener,[$dom,$event]);
})();
$$_store(function (fn) {
	return function (obj) {
		return fn[$apply](obj,$$_slice[$call](arguments,1));
	};
},$take);
$$_join = $$_array_prototype[$join];
(function () {
	var join = o[$take]($$_join);
	$$_store(function (fn,memo) {
		memo = memo || {};
		return function () {
			var key = join(arguments);
			return memo[$hasOwnProperty](key) ? memo[key] : (memo[key] = fn[$apply](this,arguments));
		};
	},$memoize);
})();
$$_store(function (pattern,flags) {
	return new $$RegExp(pattern,flags);
},$regex);
$$_store(function () {
	return $$_join[$call](arguments,emptyString);
},$string);
$$_class_name_test_regex = o[$memoize](function (className) {
	return o[$regex](o[$string]('(^|\\s+)',className,'(\\s+|$)'));
});
$$_store(function (element,className) {
	return $$_class_name_test_regex(className)[$test](element[$className]);
},$has_class_name,[$dom]);
$$_store(function (node,fn) {
	var found = $$null;
	looking: do {
		if (fn[$call](node,node)) {
			found = node;
			break looking;
		}
	} while (node && (node = node[$parentNode]))
	return found;
},$find_ancestor_or_self,[$dom]);
$$_store(function (hash) {
	var nodeName = hash[$nodeName], className = hash[$className], test = hash[$test] || function () {return $$true;}, ancestor = hash[$ancestor], action = hash[$action];
	$$_event[$add_listener](ancestor,hash[$type],function (e) {
		var target = e[$target], relatedTarget = e[$relatedTarget], reachedAncestor = $$false;

		var classNameTest = className ? function (node) {return $$_event[$has_class_name](node,className);} : function () {return $$true;},
		nodeNameTest = nodeName ? function (node) {return node[$nodeName] === nodeName} : function () {return $$true;};

		var interestingNode = $$_dom[$find_ancestor_or_self](target,function (node) {
			if (node === ancestor) {
				return (reachedAncestor = $$true);
			}
			return classNameTest(node) && nodeNameTest(node) && test(node,e);
		});

		if (!reachedAncestor && interestingNode) {
			if (relatedTarget) {
				if (interestingNode === relatedTarget || interestingNode[$contains](relatedTarget)) {
					return;
				}
			}
			e.delegateTarget = interestingNode;
			action(e);
		}

	});
},$delegate,[$dom,$event])
})();
