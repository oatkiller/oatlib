$$_call_once = o[$call_once] = function (my_fn) {
	var fn = function () {
		var result = my_fn[$apply](this,arguments);
		return (fn = $$_call_once = o[$call_once] = function () {return result;})[$apply](this,arguments);
	};
	return function () {
		return fn[$apply](this,arguments);
	};
};
