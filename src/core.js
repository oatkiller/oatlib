var emptyString = '',
namespace = 'http://oatlab.com/oatlib/v2',
o,
$$_function_prototype = $$Function[$prototype],
$$_array_prototype = $$Array[$prototype],
$$_bindings = [],
$$_store = function (fn,name,namespace) {
	return ((namespace || o)[o(name)] = fn);
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
