//= require <hasOwnProperty>
o.object_memo = function (property_name,calculate) {
	return function () {
		var that = this;
		// would you believe that dom elements in ie dont have hasOwnProperty?
		return o.hasOwnProperty(that,property_name) ? that[property_name] : (that[property_name] = calculate.apply(that,arguments));
	};
};
