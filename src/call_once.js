o.call_once = function (my_fn) {
	var fn = function () {
		var result = my_fn.apply(this,arguments);
		return (fn = function () {return result;}).apply(this,arguments);
	};
	return function () {
		return fn.apply(this,arguments);
	};
};
