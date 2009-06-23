(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $toString = 'toString', $addEventListener = 'addEventListener', $attachEvent = 'attachEvent', $add_event_handler = 'add_event_handler', $apply = 'apply', emptyString = '';
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
$$_store(function (element,type,fn,bubble) {
	$$_store(element[$addEventListener] ? function (element,type,fn,bubble) {
		return element[$addEventListener](type,fn,bubble);
	} : function (element,type,fn) {
		return element[$attachEvent]('on'+type,fn);
	},$add_event_handler)[$apply](this,arguments);
},$add_event_handler);
})();
