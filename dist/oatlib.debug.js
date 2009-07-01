(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_namespace, $length = 'length', $slice = 'slice', $$_store, $toString = 'toString', $$_dom, $dom = 'dom', $$_event, $event = 'event', $base_event_modifier = 'base_event_modifier', $$_slice, $apply = 'apply', $array = 'array', $call = 'call', $concat = 'concat', $bind = 'bind', $$null = null, $curry = 'curry', $addEventListener = 'addEventListener', $attachEvent = 'attachEvent', $on = 'on', $add_event_handler = 'add_event_handler', $this = 'this', $event_listeners = 'event_listeners', $schedule_purge = 'schedule_purge', $add_event_listener = 'add_event_listener', $$window = window, $unload = 'unload', $purge = 'purge', emptyString = '';
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
},$base_event_modifier,[$dom]);

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
		$$_store(element[$addEventListener] ? o[$dom][$base_event_modifier][o[$curry]]($addEventListener,emptyString) : o[$dom][$base_event_modifier][o[$curry]]($attachEvent,$on),$add_event_handler,[$dom])[$apply]($this,arguments);
	},$add_event_handler,[$dom,$event]);

})();


(function () {
	var event_listeners = $$_store([],$event_listeners,[$dom,$event]);

	$$_store(function (node,type,fn,bubble) {

		event_listeners.push(arguments);

		o[$dom][$event][$schedule_purge]();

		return $$_event[$add_event_handler][$apply](this,arguments);

	},$add_event_listener,[$dom,$event]);
})();
$$_store(function () {

	$$_event[$add_event_listener]($$window,$unload,function () {$$_event[$purge]();});

},$schedule_purge,[$dom,$event]);
})();
