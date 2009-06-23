(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $toString = 'toString', $base_event_modifier = 'base_event_modifier', $$_slice, $slice = 'slice', $apply = 'apply', $array = 'array', $call = 'call', $concat = 'concat', $bind = 'bind', $$null = null, $curry = 'curry', $addEventListener = 'addEventListener', $attachEvent = 'attachEvent', $on = 'on', $add_event_handler = 'add_event_handler', $this = 'this', $removeEventListener = 'removeEventListener', $detachEvent = 'detachEvent', $remove_event_handler = 'remove_event_handler', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
o;
$$_function_prototype = $$Function[$prototype];
$$_array_prototype = $$Array[$prototype];
$$_bindings = [];
$$_store = function (fn,name,namespace) {
	if (namespace) {
		var qn = o(name);
		namespace[qn] = fn;
		o[name] = qn;
	} else {
		o[name] = fn;
	}
	return fn;
};

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
$$_store(function (propertyName,prefix,element,type,fn,bubble) {
	return element[propertyName](prefix + type,fn,bubble);
},$base_event_modifier);

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
},$bind,$$_function_prototype);
$$_store(function () {
	return this[o[$bind]][$apply](this,[$$null][$concat](o[$array](arguments)));
},$curry,$$_function_prototype);
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$addEventListener] ? o[$base_event_modifier][o[$curry]]($addEventListener,emptyString) : o[$base_event_modifier][o[$curry]]($attachEvent,$on),$add_event_handler)[$apply]($this,arguments);
	},$add_event_handler);

})();

(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$removeEventListener] ? o[$base_event_modifier][o[$curry]]($removeEventListener,emptyString) : o[$base_event_modifier][o[$curry]]($detachEvent,$on),$remove_event_handler)[$apply]($this,arguments);
	},$remove_event_handler);

})();
})();
