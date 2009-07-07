$$_get_once = o[$get_once] = function (methodName,calculate) {
	return function () {
		var value = calculate[$apply](this,arguments);
		return (this[methodName] = function () {
			return value;
		})[$apply](this,arguments);
	};
};
