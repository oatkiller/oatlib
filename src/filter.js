//= require <each>
//= require <is_array>
o.store(Array,'filter',function (fn) {
	var results, assign;
	if (o.is_array(this)) {
		results = [];
		assign = function (property_name,property) {
			return results.push(property);
		};
	} else {
		results = {};
		assign = function (property_name,property) {
			results[property_name] = property;
		};
	}
	o.each(this,function (element,property_name,that) {
		if (fn.call(that,element,property_name,that)) {
			assign(property_name,element);
		}
	});
	return results;
});
