//= require <each>
o.store(Array,'find',function (fn) {
	var result = false, that = this;
	o.each(this,function (element,property_name,obj) {
		if (fn.call(obj,element,property_name,obj)) {
			result = element;
			return o.each_break;
		}
	});
	return result;
});
