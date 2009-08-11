//= require <each>
o.store(Array,'filter',function (fn) {
	var results = [];
	o.each(this,function (element,property_name,that) {
		if (fn.call(that,element,property_name,that)) {
			results.push(element);
		}
	});
	return results;
});
