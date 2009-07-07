$$_call_once = o[$call_once] = function (fn) {
	var inner_fn = function () {
		var result = fn[$apply](this,arguments);
		return (inner_fn = function () {return result;})[$apply](this,arguments);
	};
	return function () {
		return inner_fn[$apply](this,arguments);
	};
};
