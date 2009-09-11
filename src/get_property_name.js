o.get_property_name = o.take(function (property) {
	for (var property_name in this) {
		if (this[property_name] === property) {
			return property_name;
		}
	}
});
