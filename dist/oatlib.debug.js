(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $toString = 'toString', $$_slice, $slice = 'slice', $apply = 'apply', $call = 'call', $take = 'take', $$_join, $join = 'join', $hasOwnProperty = 'hasOwnProperty', $memoize = 'memoize', $$RegExp = RegExp, $regex = 'regex', $string = 'string', $$_class_name_test_regex, $test = 'test', $className = 'className', $has_class_name = 'has_class_name', emptyString = '';
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
$$_slice = $$_array_prototype[$slice];
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
},$has_class_name);
})();
