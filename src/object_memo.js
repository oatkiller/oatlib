//= require <hasOwnProperty>
$$_object_memo = o.object_memo = function (propertyName,calculate) {
	return function () {
		var that = this;
		// would you believe that dom elements in ie dont have hasOwnProperty?
		return $$_hasOwnProperty.call(that,propertyName) ? that[propertyName] : (that[propertyName] = calculate.apply(that,arguments));
	};
};
