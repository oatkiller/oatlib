$$_get_once = o[$get_once] = function (methodName,calculate) {
	return function () {
		var value = calculate[$apply](this,arguments);
		this[methodName] = function () {
			return value;
		};
		return value;
	};
};
