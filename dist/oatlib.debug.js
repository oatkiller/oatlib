(function () {
var $$_slice, $slice = 'slice', $$Array = Array, $prototype = 'prototype', $$_array, $array = 'array', $apply = 'apply', $$_bind, $call = 'call', $concat = 'concat', $splice = 'splice', $$null = null, $length = 'length', emptyString = '';
oatlib = function (fn) {
	return fn.call(this,oatlib);
};
$$_slice = oatlib[$slice] = $$Array[$prototype][$slice];
$$_array = oatlib[$array] = function (arrayLike) {
	return $$_slice[$apply](arrayLike);
};
(function () {

	$$_bind = oatlib.bind = function (fn,obj) { // holds logic for curry
		var that = fn,
		oldArguments = $$_slice[$call](arguments,2);
		return function () {
			return that[$apply](obj,oldArguments[$concat]($$_array(arguments)));
		};
	};

})();
oatlib.curry = function (fn) {
	var args = $$_array(arguments);
	args[$splice](1,0,$$null);
	return $$_bind[$apply]($$null,args);
};

oatlib.inject = function (memo, iterator) { // takes a memo, an iterator function and any number of objects to be combined somehow. for each arg after iterator, iterator is called with the memo as its first param and the iterator as its second. ultimately the memo is returned. see unit tests for example
	for (var i = 2, length = arguments[$length]; i < length; i++) {
		memo = iterator(memo,arguments[i]);
	}
	return memo;
};
})();
