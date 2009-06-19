var emptyString = '',
namespace = 'http://oatlab.com/oatlib/v2',
o,
oat_array_prototype,
oat_function_prototype;

window[namespace] = o = function (fn) {
	return fn[$call](this,arguments.callee);
};

o.toString = function () {
	return namespace;
};

oat_array_prototype = $$Array[$prototype][o] = function () {
	oat_array_prototype.currentObj = this;
	return oat_array_prototype;
};

oat_function_prototype = $$Function[$prototype][o] = function () {
	oat_function_prototype.currentObj = this;
	return oat_function_prototype;
};
