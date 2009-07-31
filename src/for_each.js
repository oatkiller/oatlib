o.for_each = function (obj,fn) {
	for (var property_name in obj) {
		fn(obj[property_name],property_name,obj);
	}
};
