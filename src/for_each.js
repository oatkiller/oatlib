$$_store(function (obj,fn) {
	for (var propertyName in obj) {
		fn(obj[obj[propertyName]],propertyName,obj);
	}
},$for_each);
