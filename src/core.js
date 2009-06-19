var emptyString = '',
namespace = 'http://oatlab.com/oatlib/v2',
o,
get_prototype_namespacer = function () {
	return function () {
		return this;
	};
},
oat_array_prototype,
oat_function_prototype;

window[namespace] = o = function (fn) {
	return fn[$call](this,arguments.callee);
};

o.toString = function () {
	return namespace;
};

oat_array_prototype = $$Array[$prototype][o] = get_prototype_namespacer();
oat_function_prototype = $$Function[$prototype][o] = get_prototype_namespacer();
