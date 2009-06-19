(function () {
var $call = 'call', $$Array = Array, $prototype = 'prototype', $$Function = Function, $$_slice, $slice = 'slice', $array = 'array', $apply = 'apply', $bind = 'bind', $concat = 'concat', $curry = 'curry', $$null = null, emptyString = '';
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
$$_slice = $$Array[$prototype][$slice];
o[$array] = function (arrayLike) {
	return $$_slice[$apply](arrayLike);
};

oat_function_prototype[$bind] = function (obj) { // holds the logic for curry
	var that = oat_function_prototype.currentObj,
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat](arguments));
	};
};
oat_function_prototype[$curry] = function () {// logic lives in bind
	return (oat_function_prototype[$curry] = function () {
		var that = oat_function_prototype.currentObj;
		return that[o]()[$bind][$apply](this,[$$null][$concat](arguments));
	})[$apply](this,arguments);
};
})();
