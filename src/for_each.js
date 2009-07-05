o[$for_each] = function (obj,fn) {
	for (var propertyName in obj) {
		fn(obj[propertyName],propertyName,obj);
	}
};
