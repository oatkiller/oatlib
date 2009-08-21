o.get_once = function (method_name,calculate) {
	return function () {
		var value = calculate.apply(this,arguments);
		this[method_name] = function () {
			return value;
		};
		return value;
	};
};

