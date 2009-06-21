(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $length = 'length', $call = 'call', $each = 'each', $hasOwnProperty = 'hasOwnProperty', $indexOf = 'indexOf', $push = 'push', $unique = 'unique', emptyString = '';
var emptyString = '',
namespace = 'http://oatlab.com/oatlib/v2',
o,
$$_function_prototype = $$Function[$prototype],
$$_array_prototype = $$Array[$prototype],
$$_bindings = [],
$$_store = function (fn,name,namespace) {
	if (namespace) {
		namespace[o(name)] = fn;
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

o.toString = function () {
	return namespace;
};
$$_store(function (fn) {
		var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
},$each,$$_array_prototype);
$$_store(function (element) {

	var that = this,
	length = that[$length],
	from = arguments[1] || 0;

	if (from < 0) {
		from += length;
	}

	for (; from < length; from++) {
		if (that[$hasOwnProperty](from) && that[from] === element) {
			return from;
		}
	}

	return -1;

},$indexOf,$$_array_prototype);
$$_store(function () {
	var uniques = [];
	this[o($each)](function (raElement) {
		uniques[o($indexOf)](raElement) === -1 && uniques[$push](raElement);
	});
	return uniques;
},$unique,$$_array_prototype);
})();
